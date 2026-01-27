import type { ReactNode } from 'react';

interface TerminalOutputProps {
  command?: string;
  output: ReactNode;
}

export const TerminalOutput = ({ command, output }: TerminalOutputProps) => {
  return (
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
  );
};
