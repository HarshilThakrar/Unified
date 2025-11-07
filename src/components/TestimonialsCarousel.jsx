import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './UI/Container.jsx';
import SectionTitle from './UI/SectionTitle.jsx';

/**
 * Testimonials carousel component with auto-slide and fade animations
 */
const TestimonialsCarousel = ({ isFullPage = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Mitchell',
      company: 'ABC Construction Group',
      role: 'CEO',
      rating: 5,
      text: 'Unifide exceeded our expectations on every front. Their attention to detail and professional approach made our project a resounding success.',
      image: 'john',
    },
    {
      name: 'Sarah Chen',
      company: 'Metro Infrastructure',
      role: 'Project Director',
      rating: 5,
      text: 'Working with Unifide was a game-changer. Their innovative solutions and commitment to sustainability align perfectly with our values.',
      image: 'sarah',
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Development Corp',
      role: 'Operations Manager',
      rating: 5,
      text: 'The team at Unifide demonstrated exceptional expertise and delivered our project ahead of schedule. Highly recommended for any large-scale construction project.',
      image: 'michael',
    },
    {
      name: 'Emily Watson',
      company: 'Urban Planning Solutions',
      role: 'Director',
      rating: 5,
      text: 'Unifide\'s engineering excellence and project management skills are unmatched. They transformed our vision into reality with precision and care.',
      image: 'emily',
    },
  ];

  const displayTestimonials = isFullPage ? testimonials : testimonials.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [displayTestimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`py-20 ${isFullPage ? 'bg-white' : 'bg-accent-light'}`}>
      <Container>
        {!isFullPage && <SectionTitle title="Client Testimonials" subtitle="What Clients Say" />}

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-accent p-8 md:p-12 rounded-2xl shadow-xl"
            >
              {/* Stars Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(displayTestimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-text-light text-center leading-relaxed mb-8 italic">
                "{displayTestimonials[currentIndex].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-xl">
                    {displayTestimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text">
                    {displayTestimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-text-light">
                    {displayTestimonials[currentIndex].role}, {displayTestimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-accent hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
