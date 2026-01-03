import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section education" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
      </motion.div>

      <div className="education-timeline">
        {portfolioData.education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="education-header">
              <div className="education-icon">
                <GraduationCap size={24} />
              </div>
              <span className="education-period">{edu.period}</span>
            </div>

            <h3 className="education-degree">{edu.degree}</h3>
            {edu.minor && <h4 className="education-minor">{edu.minor}</h4>}

            <div className="education-school">
              <h4>{edu.school}</h4>
              <span>{edu.location}</span>
            </div>

            <p className="education-coursework">
              <strong>Relevant Coursework:</strong> {edu.coursework}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
