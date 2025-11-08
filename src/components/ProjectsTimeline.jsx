import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from './UI/Container.jsx';
import SectionTitle from './UI/SectionTitle.jsx';

/**
 * Projects timeline preview component with vertical line and alternating items
 */
const ProjectsTimeline = ({ isFullPage = false }) => {
  const projects = [
    {
      year: '2023',
      title: 'Highway Expansion Project',
      description: 'Major highway expansion connecting three major cities, spanning 150km with advanced bridge systems.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      year: '2022',
      title: 'Commercial Complex Construction',
      description: 'State-of-the-art commercial complex with sustainable design and LEED certification.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    },
    {
      year: '2021',
      title: 'Water Treatment Facility',
      description: 'Modern water treatment facility serving 500,000 residents with advanced filtration systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    },
    {
      year: '2020',
      title: 'Residential Tower Development',
      description: 'Luxury residential tower with 40 floors, featuring smart home technology and green spaces.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    },
  ];

  // Limit to 3 items for preview, show all for full page
  const displayProjects = isFullPage ? projects : projects.slice(0, 3);

  return (
    <section className={`py-20 ${isFullPage ? 'bg-accent-light' : 'bg-white'}`}>
      <Container>
        {!isFullPage && (
          <SectionTitle title="Recent Projects" subtitle="Our Portfolio" />
        )}

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary opacity-30 hidden md:block" />

          {/* Projects */}
          <div className="space-y-12 md:space-y-20">
            {displayProjects.map((project, index) => {
              const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
              const isEven = index % 2 === 0;

              return (
                <div
                  key={project.year}
                  ref={ref}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Year Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center z-10 hidden md:flex"
                  >
                    <span className="text-white font-heading font-bold text-lg">
                      {project.year}
                    </span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-5/12 relative group ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {/* Hover Image - Appears above text on hover */}
                    <div className="absolute -top-44 left-0 right-0 z-20 pointer-events-none hidden md:block opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>

                    <div className="bg-accent p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 mt-12 md:mt-16 border-2 border-transparent group-hover:bg-white group-hover:border-[#0095AA]">
                      <h3 className="text-2xl font-heading font-bold text uppercase mb-4">
                        {project.title}
                      </h3>
                      <p className="text-light leading-relaxed mb-6">
                        {project.description}
                      </p>
                      {isFullPage && (
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4">
                          {/* Placeholder for project image */}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-2/12" />

                  {/* Mobile Year Badge */}
                  <div className="md:hidden w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-heading font-bold">
                      {project.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!isFullPage && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/projects"
              className="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors duration-300 glow-cyan"
            >
              View All Projects
            </a>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default ProjectsTimeline;
