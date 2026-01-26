import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasDetailedContent = experience.summary || experience.sections || experience.points;

  return (
    <motion.div
      className={`exp-card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <motion.button
        className="exp-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
        whileTap={{ scale: 0.995 }}
        layout
      >
        <div className="exp-card-main">
          <div className="exp-card-info">
            <h3 className="exp-card-title">{experience.title}</h3>
            <h4 className="exp-card-company">{experience.company}</h4>
            {experience.summary && <p className="exp-card-preview">{experience.summary}</p>}
          </div>
          <div className="exp-card-meta">
            <span className="exp-card-period">{experience.period}</span>
            <div className="exp-card-location">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        {hasDetailedContent && (
          <motion.div
            className="exp-card-toggle"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isExpanded && hasDetailedContent && (
          <motion.div
            className="exp-card-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="exp-card-body">
              {/* Sections with headers */}
              {experience.sections?.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  className="exp-card-section"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: sectionIndex * 0.05 }}
                >
                  {section.header && <h5 className="exp-card-section-header">{section.header}</h5>}
                  <ul className="exp-card-points">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Simple points (backward compatibility) */}
              {!experience.sections && experience.points && (
                <ul className="exp-card-points">
                  {experience.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
