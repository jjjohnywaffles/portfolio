import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, Globe, Github, Linkedin, Youtube, HandshakeIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={24} />,
  linkedin: <Linkedin size={24} />,
  youtube: <Youtube size={24} />,
  handshake: <HandshakeIcon size={24} />,
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section contact" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Contact Me</h2>
      </motion.div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="contact-name">{portfolioData.name}</h3>
        <p className="contact-tagline">{portfolioData.tagline}</p>

        <div className="contact-details">
          <motion.a
            href={`tel:${portfolioData.contact.phone}`}
            className="contact-link"
            whileHover={{ scale: 1.05, color: 'var(--accent)' }}
          >
            <Phone size={20} />
            <span>{portfolioData.contact.phone}</span>
          </motion.a>

          <motion.a
            href={`mailto:${portfolioData.contact.email}`}
            className="contact-link"
            whileHover={{ scale: 1.05, color: 'var(--accent)' }}
          >
            <Mail size={20} />
            <span>{portfolioData.contact.email}</span>
          </motion.a>

          <motion.a
            href={`https://${portfolioData.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            whileHover={{ scale: 1.05, color: 'var(--accent)' }}
          >
            <Globe size={20} />
            <span>{portfolioData.contact.website}</span>
          </motion.a>
        </div>

        <div className="contact-socials">
          {portfolioData.socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'var(--accent)',
                color: 'white',
              }}
            >
              {iconMap[link.icon]}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Jonathan Hu. Built with React & TypeScript.</p>
      </motion.footer>
    </section>
  );
};
