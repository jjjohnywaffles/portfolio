interface CommandInfo {
  name: string;
  description: string;
}

const commands: CommandInfo[] = [
  { name: 'about', description: 'Learn more about me' },
  { name: 'experience', description: 'View my work experience' },
  { name: 'education', description: 'View my education background' },
  { name: 'skills', description: 'List my technical skills' },
  { name: 'projects', description: 'Browse my projects' },
  { name: 'contact', description: 'Get my contact information' },
  { name: 'socials', description: 'View my social links' },
  { name: 'resume', description: 'Download my resume' },
  { name: 'clear', description: 'Clear the terminal' },
  { name: 'help', description: 'Show this help message' },
];

export const Help = () => {
  return (
    <div className="terminal-help">
      <p className="help-header">Available commands:</p>
      <br />
      <div className="help-commands">
        {commands.map((cmd) => (
          <div key={cmd.name} className="help-command">
            <span className="help-cmd-name">{cmd.name}</span>
            <span className="help-cmd-desc">{cmd.description}</span>
          </div>
        ))}
      </div>
      <br />
      <p className="help-tip">
        Tip: Use <span className="cmd-highlight">↑</span> and{' '}
        <span className="cmd-highlight">↓</span> to navigate command history.
      </p>
    </div>
  );
};
