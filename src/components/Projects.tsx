import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Code, Gamepad2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import type { Project } from '../types';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<'portfolio' | 'interactive'>('portfolio');

  const projects: Project[] =
    activeTab === 'portfolio' ? portfolioData.portfolioProjects : portfolioData.interactiveProjects;

  return (
    <section id="projects" className="section projects" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
      </motion.div>

      <motion.div
        className="projects-tabs"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          className={`tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          <Code size={18} />
          Portfolio
        </button>
        <button
          className={`tab-btn ${activeTab === 'interactive' ? 'active' : ''}`}
          onClick={() => setActiveTab('interactive')}
        >
          <Gamepad2 size={18} />
          Interactive
        </button>
      </motion.div>

      <motion.div
        className="projects-grid"
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            }}
          >
            <div className="project-content">
              <div className="project-icon">
                {activeTab === 'portfolio' ? <Code size={28} /> : <Gamepad2 size={28} />}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-link">
                <span>View Project</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
