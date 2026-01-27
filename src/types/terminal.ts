import type { ReactNode } from 'react';

export interface CommandOutput {
  id: string;
  command: string;
  output: ReactNode;
  timestamp: Date;
}

export interface Command {
  name: string;
  description: string;
  usage?: string;
  execute: () => ReactNode;
}

export interface TerminalState {
  history: CommandOutput[];
  commandHistory: string[];
  historyIndex: number;
}
