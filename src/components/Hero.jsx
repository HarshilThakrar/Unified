import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button.jsx';
import Container from './UI/Container.jsx';
import useMouseParallax from '../hooks/useMouseParallax.js';

/**
 * Hero section with animated text and parallax building image
 */
const Hero = () => {
  const navigate = useNavigate();
  const parallax = useMouseParallax({ intensity: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/dron-shut.mp4" type="video/mp4" />
      </video>
      
      {/* White Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-white opacity-60 z-10"></div>
      
      <Container className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-6">
        {/* Left Side - Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 text-center md:text-left"
        >
          <motion.div variants={itemVariants}>
            <motion.span
              className="text font-heading font-semibold uppercase tracking-wider text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Excellence in Engineering
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text uppercase leading-tight"
          >
            Building the
            <br />
            <span 
              className="text-primary-dark"
              data-cursor="transparent"
            >
              Future
            </span>
            <br />
            of Infrastructure
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            We deliver world-class civil engineering and construction solutions
            with precision, innovation, and unwavering commitment to excellence.
            Transforming visions into reality, one project at a time.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button onClick={() => navigate('/projects')}>
              View Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="bg-white text-primary border-0 hover:bg-primary hover:text-white"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Parallax Building Image */}
        <motion.div
          className="relative hidden lg:block ml-8"
          style={{
            x: parallax.x * 50,
            y: parallax.y * 50,
          }}
        >
          <motion.div
            className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Building Image */}
            <img
              src="/hero-section-image.png"
              alt="Building Construction"
              className="w-full h-full object-cover opacity-80"
              style={{ objectPosition: 'right' }}
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
