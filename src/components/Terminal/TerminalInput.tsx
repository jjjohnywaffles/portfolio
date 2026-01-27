import { useRef, useEffect, type KeyboardEvent, type ChangeEvent } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onNavigateHistory: (direction: 'up' | 'down') => void;
}

export const TerminalInput = ({
  value,
  onChange,
  onSubmit,
  onNavigateHistory,
}: TerminalInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount and when clicking anywhere in terminal
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', handleClick);
    inputRef.current?.focus();

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(value);
      onChange('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      onNavigateHistory('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      onNavigateHistory('down');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="terminal-input-line">
      <span className="terminal-prompt">
        <span className="prompt-user">visitor</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">jonathan.hu</span>
        <span className="prompt-symbol">$</span>
      </span>
      <div className="terminal-input-wrapper">
        <span className="terminal-input-display">{value}</span>
        <span className="terminal-cursor" />
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
};
