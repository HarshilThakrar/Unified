import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Container from './UI/Container.jsx';
import SectionTitle from './UI/SectionTitle.jsx';

/**
 * About section with team image and animated counters
 */
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    if (inView && !countersStarted) {
      setCountersStarted(true);
    }
  }, [inView, countersStarted]);

  const stats = [
    { label: 'Years of Experience', value: 25, suffix: '+' },
    { label: 'Projects Completed', value: 500, suffix: '+' },
    { label: 'Team Members', value: 150, suffix: '+' },
    { label: 'Countries Served', value: 30, suffix: '+' },
  ];

  const Counter = ({ end, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      let startTime = null;
      let animationFrameId = null;
      let isMounted = true;

      const animate = (currentTime) => {
        if (!isMounted) return;
        
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        if (isMounted) {
          setCount(Math.floor(progress * end));
        }
        
        if (progress < 1 && isMounted) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };
      
      animationFrameId = requestAnimationFrame(animate);

      return () => {
        isMounted = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [countersStarted, end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-20 bg-accent-light">
      <Container>
        <SectionTitle title="About Unifide" subtitle="Who We Are" titleColor="text" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/aboutus-section.png"
                alt="About Unifide"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-heading font-bold text-text uppercase">
              Leading the Industry Since 1998
            </h3>
            <p className="text-text-light leading-relaxed">
              Unifide has been at the forefront of civil engineering and
              construction excellence for over two decades. Our team of
              experienced engineers, architects, and project managers brings
              innovative solutions to complex infrastructure challenges.
            </p>
            <p className="text-text-light leading-relaxed">
              We specialize in large-scale infrastructure projects, commercial
              construction, and sustainable building practices. Our commitment to
              quality, safety, and environmental responsibility sets us apart in
              the industry.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-accent p-6 rounded-lg shadow-md"
                >
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-sm text-text-light font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
