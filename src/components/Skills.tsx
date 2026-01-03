import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolio';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const allSkills = portfolioData.skills.flat();

  return (
    <section id="skills" className="section skills" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
      </motion.div>

      <motion.div
        className="skills-grid"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill}
            className={`skill-tag ${hoveredSkill === skill ? 'active' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'var(--accent)',
              color: 'white',
            }}
            onHoverStart={() => setHoveredSkill(skill)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
