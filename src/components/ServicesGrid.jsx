import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard.jsx';
import Container from './UI/Container.jsx';
import SectionTitle from './UI/SectionTitle.jsx';

/**
 * Services grid component with 4 interactive service cards
 */
const ServicesGrid = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-1 10v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5m1-10H9m0-4h6" />
        </svg>
      ),
      title: 'Infrastructure Development',
      description: 'Design and construction of large-scale infrastructure projects including roads, bridges, and public utilities.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring timely delivery, budget adherence, and quality control.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Structural Engineering',
      description: 'Advanced structural analysis and design for commercial, residential, and industrial buildings.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      ),
      title: 'Sustainable Solutions',
      description: 'Environmentally responsible construction practices and green building certifications for sustainable development.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle title="Our Services" subtitle="What We Offer" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
