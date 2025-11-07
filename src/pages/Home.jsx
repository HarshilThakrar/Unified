import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import ProjectsTimeline from '../components/ProjectsTimeline.jsx';
import TestimonialsCarousel from '../components/TestimonialsCarousel.jsx';
import VideoSection from '../components/VideoSection.jsx';
import ClientsSlider from '../components/ClientsSlider.jsx';
import ProjectsSlider from '../components/ProjectsSlider.jsx';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button.jsx';
import Container from '../components/UI/Container.jsx';

/**
 * Home page with all sections
 */
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Hero />
      <About />
      <VideoSection />
      <ServicesGrid />
      <ProjectsTimeline />
      <TestimonialsCarousel />
      <ClientsSlider />
      <ProjectsSlider />

      {/* Contact CTA Banner */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6 text">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-text-light">
              Let's discuss how we can bring your vision to life with our expert
              engineering and construction services.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/contact')}
            >
              Contact Us Today
            </Button>
          </div>
        </Container>
      </motion.section>
    </div>
  );
};

export default Home;
