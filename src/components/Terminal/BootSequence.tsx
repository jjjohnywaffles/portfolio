import { useState, useEffect } from 'react';

interface BootStep {
  text: string;
  delay: number;
  status?: 'loading' | 'success';
}

const bootSteps: BootStep[] = [
  { text: 'Establishing connection', delay: 0, status: 'loading' },
  { text: 'Connection established', delay: 1200, status: 'success' },
  { text: 'Loading portfolio data', delay: 1800, status: 'loading' },
  { text: 'Portfolio data loaded', delay: 3000, status: 'success' },
  { text: 'Initializing terminal', delay: 3600, status: 'loading' },
  { text: 'Terminal ready', delay: 4800, status: 'success' },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [visibleSteps, setVisibleSteps] = useState<number>(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    bootSteps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setVisibleSteps(index + 1);
      }, step.delay);
      timers.push(timer);
    });

    // Complete the boot sequence
    const completeTimer = setTimeout(() => {
      setComplete(true);
      setTimeout(onComplete, 600);
    }, 5400);
    timers.push(completeTimer);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <div className={`boot-sequence ${complete ? 'fade-out' : ''}`}>
      <div className="boot-content">
        <div className="boot-header">
          <span className="boot-title">jonathan.hu</span>
          <span className="boot-version">v1.0.0</span>
        </div>
        <div className="boot-steps">
          {bootSteps.slice(0, visibleSteps).map((step, index) => (
            <div key={index} className={`boot-step ${step.status}`}>
              <span className="boot-prefix">
                {step.status === 'loading' ? '...' : step.status === 'success' ? '✓' : '>'}
              </span>
              <span className="boot-text">{step.text}</span>
              {step.status === 'loading' && index === visibleSteps - 1 && (
                <span className="boot-dots">
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </span>
              )}
            </div>
          ))}
        </div>
        {complete && (
          <div className="boot-complete">
            <span>Press any key or wait to continue...</span>
          </div>
        )}
      </div>
    </div>
  );
};
