import { portfolioData } from '../../../data/portfolio';

export const Welcome = () => {
  return (
    <div className="terminal-welcome">
      <pre className="ascii-art">
        {`
     _                   _   _                   _   _       
    | | ___  _ __   __ _| |_| |__   __ _ _ __   | | | |_   _ 
 _  | |/ _ \\| '_ \\ / _\` | __| '_ \\ / _\` | '_ \\  | |_| | | | |
| |_| | (_) | | | | (_| | |_| | | | (_| | | | | |  _  | |_| |
 \\___/ \\___/|_| |_|\\__,_|\\__|_| |_|\\__,_|_| |_| |_| |_|\\__,_|
`}
      </pre>
      <p className="welcome-title">Full-stack Software Engineer</p>
      <p className="welcome-tagline">{portfolioData.tagline}</p>
      <br />
      <p className="welcome-hint">
        Type <span className="cmd-highlight">help</span> to see available commands.
      </p>
    </div>
  );
};
