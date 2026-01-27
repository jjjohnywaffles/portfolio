import { useEffect, useRef, useState, useCallback } from 'react';
import { useTerminal } from '../../hooks/useTerminal';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { BootSequence } from './BootSequence';

export const Terminal = () => {
  const [isBooting, setIsBooting] = useState(true);
  const { entries, currentInput, setCurrentInput, processCommand, navigateHistory } = useTerminal();
  const terminalRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleBootComplete = useCallback(() => {
    setIsBooting(false);
  }, []);

  // Allow skipping boot sequence with any key press
  useEffect(() => {
    if (!isBooting) return;

    const handleKeyPress = () => {
      setIsBooting(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isBooting]);

  // Auto-scroll to bottom when new entries are added
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [entries]);

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

  return (
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
          {entries.map((entry) => (
            <TerminalOutput key={entry.id} command={entry.command} output={entry.output} />
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
  );
};
