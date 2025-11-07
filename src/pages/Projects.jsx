import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectsTimeline from '../components/ProjectsTimeline.jsx';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * Completed Projects page
 */
const Projects = () => {
  const projectStats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Total Area', value: '10M+ sq.ft' },
    { label: 'Years of Experience', value: '25+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  return (
    <div className="projects-page pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text uppercase mb-6">
              Completed Projects
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Explore our portfolio of successful post-tensioning projects across
              various sectors and scales.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-accent">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-light font-semibold uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Project Portfolio" subtitle="Our Work" />
        </Container>
        <ProjectsTimeline isFullPage={true} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold text uppercase mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-light text-lg mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
