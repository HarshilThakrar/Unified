import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Footer component with company info and navigation
 * Includes logo watermark
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  const footerLinks2 = [
    { path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/brochure', label: 'Brochure' },
    { path: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <footer className="bg-accent border-t border-accent text-text mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="/unified-logo.png"
                alt="Unifide Logo"
                className="h-10"
              />
            </div>
            <p className="text-text-light text-sm mb-4">
              Leading civil engineering and construction company delivering
              excellence in infrastructure development and project management.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold uppercase tracking-wider mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-light hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-heading font-semibold uppercase tracking-wider mb-4 text-primary">
              More Pages
            </h3>
            <ul className="space-y-2">
              {footerLinks2.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-light hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold uppercase tracking-wider mb-4 text-primary">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>
                <span className="text-primary">Email:</span>{' '}
                contact@unifide.com
              </li>
              <li>
                <span className="text-primary">Phone:</span> +1 (555) 123-4567
              </li>
              <li>
                <span className="text-primary">Address:</span> 123 Engineering
                Ave, Suite 100
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-accent mt-8 pt-8 text-center text-sm text-text-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            © {currentYear} Unifide. All rights reserved. | Civil Engineering &
            Construction
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
