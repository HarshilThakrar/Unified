import { motion } from 'framer-motion';
import TestimonialsCarousel from '../components/TestimonialsCarousel.jsx';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * Full Testimonials page
 */
const Testimonials = () => {
  return (
    <div className="testimonials-page pt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle title="Client Testimonials" subtitle="What Our Clients Say" />
          <p className="text-center text-text-light text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with Unifide.
          </p>
        </motion.div>
      </Container>

      <TestimonialsCarousel isFullPage={true} />
    </div>
  );
};

export default Testimonials;
