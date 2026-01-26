import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section experience" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
      </motion.div>

      <div className="experience-grid">
        {portfolioData.experience.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};
