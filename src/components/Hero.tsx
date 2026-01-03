import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-pattern" />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="hero-greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I am
        </motion.span>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {portfolioData.name}
          <span className="accent">.</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {portfolioData.tagline}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/Resume.pdf"
            download
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        className="scroll-indicator"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 2 },
        }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};
