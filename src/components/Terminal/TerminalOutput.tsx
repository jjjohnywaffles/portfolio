import type { ReactNode } from 'react';
import { EntryContext, TerminalContext } from '../../context/TerminalContext';
import { useContext } from 'react';

interface TerminalOutputProps {
  id: string;
  command?: string;
  output: ReactNode;
}

export const TerminalOutput = ({ id, command, output }: TerminalOutputProps) => {
  const { activeEntryId } = useContext(TerminalContext);

  return (
    <EntryContext.Provider value={id}>
      <TerminalContext.Provider value={{ activeEntryId, currentEntryId: id }}>
        <div className="terminal-output">
          {command !== undefined && (
            <div className="terminal-command-line">
              <span className="terminal-prompt">
                <span className="prompt-user">visitor</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">jonathan.hu</span>
                <span className="prompt-symbol">$</span>
              </span>
              <span className="terminal-command-text">{command}</span>
            </div>
          )}
          {output && <div className="terminal-output-content">{output}</div>}
        </div>
      </TerminalContext.Provider>
    </EntryContext.Provider>
  );
};
