import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

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

      <div className="experience-timeline">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="experience-marker">
              <div className="marker-dot">
                <Briefcase size={16} />
              </div>
              {index < portfolioData.experience.length - 1 && <div className="marker-line" />}
            </div>

            <motion.div
              className="experience-card"
              whileHover={{
                y: -5,
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            >
              <div className="experience-header">
                <span className="experience-period">{exp.period}</span>
                <div className="experience-location">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <h3 className="experience-title">{exp.title}</h3>
              <h4 className="experience-company">{exp.company}</h4>

              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
