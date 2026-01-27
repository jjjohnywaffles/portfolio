import { useState, useEffect, useCallback } from 'react';

export const Resume = () => {
  const [dismissed, setDismissed] = useState(false);
  const [action, setAction] = useState<string | null>(null);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Jonathan_Hu_Resume.pdf';
    link.click();
    setAction('Downloading resume...');
  }, []);

  const handleCancel = useCallback(() => {
    setDismissed(true);
  }, []);

  // Listen for keyboard shortcuts
  useEffect(() => {
    if (dismissed || action) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'd') {
        e.preventDefault();
        handleDownload();
      } else if (key === 'c' || key === 'escape') {
        e.preventDefault();
        handleCancel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dismissed, action, handleDownload, handleCancel]);

  if (dismissed) {
    return <p className="cmd-muted">Cancelled.</p>;
  }

  if (action) {
    return <p className="cmd-success">{action}</p>;
  }

  return (
    <div className="terminal-resume">
      <p className="section-label">// Resume</p>
      <br />
      <p className="resume-prompt">What would you like to do?</p>
      <br />
      <div className="resume-options">
        <button className="resume-option" onClick={handleDownload}>
          <span className="option-key">[D]</span>
          <span className="option-text">Download PDF</span>
        </button>
        <button className="resume-option cancel" onClick={handleCancel}>
          <span className="option-key">[C]</span>
          <span className="option-text">Cancel</span>
        </button>
      </div>
      <br />
      <p className="resume-hint">Press D or C to select an option.</p>
    </div>
  );
};
