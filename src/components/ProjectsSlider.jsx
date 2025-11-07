import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './UI/Container.jsx';
import SectionTitle from './UI/SectionTitle.jsx';

/**
 * Projects slider component showing completed projects
 */
const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Projects with online image paths
  const projects = [
    {
      id: 1,
      title: 'Highway Expansion Project',
      location: 'Mumbai-Pune Expressway',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      year: '2023',
    },
    {
      id: 2,
      title: 'Commercial Complex',
      location: 'Delhi NCR',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      year: '2023',
    },
    {
      id: 3,
      title: 'Residential Tower',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      year: '2022',
    },
    {
      id: 4,
      title: 'Bridge Construction',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      year: '2022',
    },
    {
      id: 5,
      title: 'Industrial Complex',
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      year: '2021',
    },
    {
      id: 6,
      title: 'Shopping Mall',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      year: '2021',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-accent-light">
      <Container>
        <SectionTitle title="Our Projects" subtitle="Completed Works" />

        <div className="relative max-w-6xl mx-auto mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-semibold bg-primary px-3 py-1 rounded-full">
                      {projects[currentIndex].year}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text mb-4">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-lg text-text-light mb-6">
                    <span className="text-primary font-semibold">Location:</span>{' '}
                    {projects[currentIndex].location}
                  </p>
                  <p className="text-text-light leading-relaxed">
                    A prestigious project showcasing our expertise in modern construction
                    and engineering excellence. This project demonstrates our commitment
                    to quality and innovation.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-accent hover:bg-primary/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Count */}
          <div className="text-center mt-8">
            <p className="text-2xl font-heading font-bold text">
              <span className="text-primary text-4xl">{projects.length}+</span> Projects Completed
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSlider;

