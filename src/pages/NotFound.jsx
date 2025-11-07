import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button.jsx';
import Container from '../components/UI/Container.jsx';

/**
 * 404 Not Found page
 */
const NotFound = () => {
  return (
    <div className="not-found-page min-h-screen flex items-center justify-center bg-white pt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h1
            className="text-9xl font-heading font-bold text-primary mb-4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            404
          </motion.h1>
          <h2 className="text-4xl font-heading font-bold text uppercase mb-4">
            Page Not Found
          </h2>
          <p className="text-text-light text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFound;
