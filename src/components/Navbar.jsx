import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar component with logo, navigation links, search bar, and action buttons
 * Includes dropdown menus and mobile menu
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/technology', label: 'Technology' },
    { path: '/resources', label: 'Resources' },
    { path: '/working', label: 'Execution Process' },
    { path: '/projects', label: 'Projects' },
    { path: '/careers', label: 'Career' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Navbar Container */}
      <motion.nav
        className="fixed top-4 left-4 right-4 z-40 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          {/* Logo - Separate from white bar */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-200 bg-white/80 backdrop-blur-md rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-lg"
          >
            <img
              src="/unified-logo.png"
              alt="Unifide Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* White Rounded Bar - Transparent */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-4 md:px-6 lg:px-8 py-3 md:py-4 flex-1">
            <div className="flex items-center justify-between gap-2 md:gap-4">
            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm md:text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-[#90EE90]'
                      : 'text-gray-700 hover:text-[#90EE90]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-3 py-2 flex-1 max-w-[200px] lg:max-w-[250px]">
              <svg 
                className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
              />
            </div>

            {/* Calendar Icon Button */}
            <button 
              className="hidden md:flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-2 hover:bg-white/90 transition-colors duration-200 flex-shrink-0"
              aria-label="Calendar"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
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
          </div>

          {/* Contact Us Button - Separated from main bar */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 text-gray-700 font-medium text-sm md:text-base hover:bg-white/90 transition-colors duration-200 flex-shrink-0 shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/80 backdrop-blur-md rounded-2xl shadow-xl mt-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-3">
                {/* Mobile Search */}
                <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2 mb-2">
                  <svg 
                    className="w-4 h-4 text-blue-500 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
                  />
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm font-medium transition-colors duration-200 py-2 ${
                      isActive(link.path)
                        ? 'text-[#90EE90]'
                        : 'text-gray-700 hover:text-[#90EE90]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Contact Button */}
                <Link
                  to="/contact"
                  className="block text-center bg-gray-100 rounded-xl px-4 py-2 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors duration-200 mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
