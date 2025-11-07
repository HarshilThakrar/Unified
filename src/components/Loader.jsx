import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Loader component with logo animation
 * Displays on initial app load and route-based lazy loading
 */
const Loader = ({ isLoading = true, onComplete }) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      // Fade out animation
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="/Logo.png"
          alt="Unifide Logo"
          className="w-24 h-24 md:w-28 md:h-28"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
        <motion.p
          className="mt-4 text-primary font-heading font-semibold uppercase tracking-wider text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
