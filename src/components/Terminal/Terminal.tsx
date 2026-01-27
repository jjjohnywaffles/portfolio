import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useTerminal } from '../../hooks/useTerminal';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { BootSequence } from './BootSequence';
import { TerminalContext } from '../../context/TerminalContext';
import { portfolioData } from '../../data/portfolio';

const asciiArt = `     _                   _   _                   _   _       
    | | ___  _ __   __ _| |_| |__   __ _ _ __   | | | |_   _ 
 _  | |/ _ \\| '_ \\ / _\` | __| '_ \\ / _\` | '_ \\  | |_| | | | |
| |_| | (_) | | | | (_| | |_| | | | (_| | | | | |  _  | |_| |
 \\___/ \\___/|_| |_|\\__,_|\\__|_| |_|\\__,_|_| |_| |_| |_|\\__,_|`;

const asciiLines = asciiArt.split('\n');
const maxAsciiLength = Math.max(...asciiLines.map((l) => l.length));

const textLines = [
  '',
  'Full-stack Software Engineer @Matrices',
  portfolioData.tagline,
  '',
  'Type `help` to see available commands.',
];

export const Terminal = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [isTypingWelcome, setIsTypingWelcome] = useState(false);
  const [asciiCharIndex, setAsciiCharIndex] = useState(0);
  const [isAsciiDone, setIsAsciiDone] = useState(false);
  const [textLineIndex, setTextLineIndex] = useState(0);
  const [textCharIndex, setTextCharIndex] = useState(0);
  const [displayedTextLines, setDisplayedTextLines] = useState<string[]>([]);
  const { entries, currentInput, setCurrentInput, processCommand, navigateHistory } =
    useTerminal(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Track the active (most recent) entry ID
  const activeEntryId = useMemo(() => {
    return entries.length > 0 ? entries[entries.length - 1].id : null;
  }, [entries]);

  const contextValue = useMemo(() => ({ activeEntryId, currentEntryId: null }), [activeEntryId]);

  const handleBootComplete = useCallback(() => {
    setIsBooting(false);
    setIsTypingWelcome(true);
  }, []);

  // Allow skipping boot sequence with any key press
  useEffect(() => {
    if (!isBooting) return;

    const handleKeyPress = () => {
      setIsBooting(false);
      setIsTypingWelcome(true);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isBooting]);

  // Allow skipping welcome typing with any key press
  useEffect(() => {
    if (!isTypingWelcome) return;

    const handleKeyPress = () => {
      // Show everything immediately
      setAsciiCharIndex(maxAsciiLength);
      setIsAsciiDone(true);
      setDisplayedTextLines(textLines);
      setTextLineIndex(textLines.length);
      setIsTypingWelcome(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTypingWelcome]);

  // Type ASCII art
  useEffect(() => {
    if (!isTypingWelcome || isAsciiDone) return;

    if (asciiCharIndex >= maxAsciiLength) {
      const timer = setTimeout(() => {
        setIsAsciiDone(true);
        setDisplayedTextLines(['']);
      }, 20);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setAsciiCharIndex((prev) => prev + 1);
    }, 3);

    return () => clearTimeout(timer);
  }, [isTypingWelcome, isAsciiDone, asciiCharIndex]);

  // Type text lines after ASCII is done
  useEffect(() => {
    if (!isTypingWelcome || !isAsciiDone) return;

    // Check if all done
    if (textLineIndex >= textLines.length) {
      const timer = setTimeout(() => {
        setIsTypingWelcome(false);
      }, 300);
      return () => clearTimeout(timer);
    }

    const currentLine = textLines[textLineIndex];

    // If current line is fully typed, move to next
    if (textCharIndex >= currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedTextLines((prev) => [...prev.slice(0, -1), currentLine]);
        setTextLineIndex((prev) => prev + 1);
        setTextCharIndex(0);
        if (textLineIndex + 1 < textLines.length) {
          setDisplayedTextLines((prev) => [...prev, '']);
        }
      }, 20);
      return () => clearTimeout(timer);
    }

    // Type next character
    const timer = setTimeout(() => {
      const partialLine = currentLine.slice(0, textCharIndex + 1);
      setDisplayedTextLines((prev) => {
        if (prev.length === 0) return [partialLine];
        return [...prev.slice(0, -1), partialLine];
      });
      setTextCharIndex((prev) => prev + 1);
    }, 5);

    return () => clearTimeout(timer);
  }, [isTypingWelcome, isAsciiDone, textLineIndex, textCharIndex]);

  // Auto-scroll to bottom when new entries are added
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [entries, asciiCharIndex, displayedTextLines]);

  if (isBooting) {
    return (
      <div className="terminal" ref={terminalRef}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-btn close" />
            <span className="terminal-btn minimize" />
            <span className="terminal-btn maximize" />
          </div>
          <span className="terminal-title">jonathan@portfolio ~ boot</span>
          <div className="terminal-header-spacer" />
        </div>
        <div className="terminal-body boot-body">
          <BootSequence onComplete={handleBootComplete} />
        </div>
      </div>
    );
  }

  // Show typing welcome animation
  if (isTypingWelcome || (isAsciiDone && displayedTextLines.length > 0 && entries.length === 0)) {
    return (
      <TerminalContext.Provider value={contextValue}>
        <div className="terminal" ref={terminalRef}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn close" />
              <span className="terminal-btn minimize" />
              <span className="terminal-btn maximize" />
            </div>
            <span className="terminal-title">jonathan@portfolio ~ zsh</span>
            <div className="terminal-header-spacer" />
          </div>
          <div className="terminal-body" ref={outputRef}>
            <div className="terminal-content">
              <div className="terminal-welcome typing">
                {/* ASCII art - all lines typing simultaneously */}
                {asciiLines.map((line, index) => (
                  <pre key={index} className="ascii-art-line">
                    {line.slice(0, asciiCharIndex)}
                  </pre>
                ))}
                {/* Text lines after ASCII */}
                {displayedTextLines.map((line, index) => {
                  const isTitle = index === 1;
                  const isTagline = index === 2;
                  const isHint = index === 4;

                  if (isTitle) {
                    return (
                      <p key={`text-${index}`} className="welcome-title">
                        {line}
                      </p>
                    );
                  }
                  if (isTagline) {
                    return (
                      <p key={`text-${index}`} className="welcome-tagline">
                        {line}
                      </p>
                    );
                  }
                  if (isHint) {
                    return (
                      <p key={`text-${index}`} className="welcome-hint">
                        {line.includes('help') ? (
                          <>
                            Type <span className="cmd-highlight">help</span> to see available
                            commands.
                          </>
                        ) : (
                          line
                        )}
                      </p>
                    );
                  }
                  return (
                    <p key={`text-${index}`} className="welcome-spacer">
                      {line || '\u00A0'}
                    </p>
                  );
                })}
                {isTypingWelcome && <span className="terminal-cursor typing-cursor" />}
              </div>
              {!isTypingWelcome && (
                <TerminalInput
                  value={currentInput}
                  onChange={setCurrentInput}
                  onSubmit={processCommand}
                  onNavigateHistory={navigateHistory}
                />
              )}
            </div>
          </div>
        </div>
      </TerminalContext.Provider>
    );
  }

  return (
    <TerminalContext.Provider value={contextValue}>
      <div className="terminal" ref={terminalRef}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-btn close" />
            <span className="terminal-btn minimize" />
            <span className="terminal-btn maximize" />
          </div>
          <span className="terminal-title">jonathan@portfolio ~ zsh</span>
          <div className="terminal-header-spacer" />
        </div>
        <div className="terminal-body" ref={outputRef}>
          <div className="terminal-content">
            {/* Show the welcome message at the top */}
            <div className="terminal-welcome">
              <pre className="ascii-art">{asciiArt}</pre>
              <br />
              <p className="welcome-title">Full-stack Software Engineer</p>
              <p className="welcome-tagline">{portfolioData.tagline}</p>
              <br />
              <p className="welcome-hint">
                Type <span className="cmd-highlight">help</span> to see available commands.
              </p>
            </div>
            {entries.map((entry) => (
              <TerminalOutput
                key={entry.id}
                id={entry.id}
                command={entry.command}
                output={entry.output}
              />
            ))}
            <TerminalInput
              value={currentInput}
              onChange={setCurrentInput}
              onSubmit={processCommand}
              onNavigateHistory={navigateHistory}
            />
          </div>
        </div>
      </div>
    </TerminalContext.Provider>
  );
};
