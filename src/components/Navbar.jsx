import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar component with logo and navigation links
 * Includes scroll effect and mobile menu
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Check if scrolled past hero section (100vh)
      setIsPastHero(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    // Check on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/material', label: 'Material' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/working', label: 'Execution Process' },
    { path: '/clients', label: 'Clients' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white"
      style={{ height: '90px' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Angled Teal Background */}
      <div 
        className="absolute top-0 right-0 h-full bg-[#0095AA]"
        style={{
          width: '70%',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 5% 100%)',
          zIndex: 0
        }}
      ></div>

      <div className="relative h-full flex items-center justify-between z-10">
        {/* Logo Section */}
        <div className="relative z-20 bg-white px-4 md:px-12 h-full flex flex-col justify-center md:ml-16">
          <Link to="/" className="flex flex-col items-start">
            <img
              src="/unified-logo.png"
              alt="Unifide Logo"
              className="h-[50px] md:h-[60px] w-auto ml-2 md:ml-10"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 pr-8 relative z-20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white no-underline font-semibold text-[16px] transition-all duration-300 whitespace-nowrap ${
                location.pathname === link.path
                  ? 'underline'
                  : 'hover:opacity-80 hover:underline'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:opacity-80 transition-colors relative z-30 mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#0095AA] border-t border-white/20 fixed top-[90px] left-0 right-0 z-[60] shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-heading font-semibold uppercase text-sm tracking-wider transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-white hover:opacity-80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
