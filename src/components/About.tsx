import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Youtube, HandshakeIcon, Phone, Mail, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  youtube: <Youtube size={20} />,
  handshake: <HandshakeIcon size={20} />,
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section about" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="about-intro">{portfolioData.bio}</h3>
          <p className="about-description">{portfolioData.description}</p>

          <div className="about-contact-info">
            <div className="contact-item">
              <Phone size={18} />
              <span>{portfolioData.contact.phone}</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>{portfolioData.contact.email}</span>
            </div>
            <div className="contact-item">
              <Globe size={18} />
              <span>{portfolioData.contact.website}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="about-image">
            <div className="image-placeholder">
              <span>JH</span>
            </div>
            <div className="about-socials">
              {portfolioData.socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                >
                  {iconMap[link.icon]}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
