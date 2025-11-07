import { motion } from 'framer-motion';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * About Us page
 */
const About = () => {
  const values = [
    {
      icon: '🏗️',
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in all our post-tensioning systems and services.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Continuously advancing our technology and methods to deliver cutting-edge solutions.',
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'Building long-term relationships based on trust, transparency, and mutual success.',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible construction practices.',
    },
  ];

  const milestones = [
    { year: '2021', title: 'Company Founded', description: 'Started with a vision to revolutionize post-tensioning systems' },
    { year: '2022', title: 'First Major Project', description: 'Completed our first large-scale infrastructure project' },
    { year: '2023', title: 'Expansion', description: 'Expanded operations to serve multiple states' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading provider of post-tensioning solutions' },
  ];

  return (
    <div className="about-page pt-24">
      {/* Hero Section */}
      <section className="py-20 blueprint-pattern" style={{ backgroundColor: '#081019' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase mb-6 text-white">
              About Unifide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Leading the industry in post-tensioning systems since 2021, delivering
              excellence and innovation in every project.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold text uppercase mb-6">
                Our Story
              </h2>
              <p className="text leading-relaxed mb-4">
                Unified Post Tensioning Systems LLP was established in 2021 with a
                clear mission: to provide high-quality, unbonded post-tensioning systems
                that enhance the structural integrity and longevity of buildings and
                infrastructure.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                From our inception, we have been committed to excellence, innovation,
                and customer satisfaction. Our team of experienced engineers and
                technicians work tirelessly to ensure every project meets the highest
                standards of quality and safety.
              </p>
              <p className="text-text-light leading-relaxed">
                Today, we are proud to be recognized as a trusted partner in the
                construction industry, having successfully completed numerous projects
                across various sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/aboutus-section.png"
                alt="Our Story"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent-light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl font-heading font-bold text-primary uppercase mb-4">
                Our Mission
              </h3>
              <p className="text-text-light leading-relaxed">
                To provide world-class post-tensioning solutions that enhance structural
                performance, reduce construction time, and deliver sustainable building
                practices. We aim to be the preferred partner for engineers, architects,
                and contractors seeking excellence in post-tensioning systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl font-heading font-bold text-primary uppercase mb-4">
                Our Vision
              </h3>
              <p className="text-text-light leading-relaxed">
                To become a globally recognized leader in post-tensioning technology,
                setting industry standards through innovation, quality, and customer
                satisfaction. We envision a future where our solutions contribute to
                smarter, more efficient, and sustainable construction practices.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Our Core Values" subtitle="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-accent-light p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-heading font-bold text uppercase mb-3">
                  {value.title}
                </h4>
                <p className="text-text-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Our Journey" subtitle="Milestones" />
          <div className="max-w-5xl mx-auto">
            {/* Timeline with vertical line */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/50 transform md:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                        className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"
                      />
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-accent-light to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl border border-accent transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-md">
                            <span className="text-white font-heading font-bold text-lg">
                              {milestone.year}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-heading font-bold text-text uppercase mb-2">
                              {milestone.title}
                            </h4>
                          </div>
                        </div>
                        <p className="text-text-light leading-relaxed text-base">
                          {milestone.description}
                        </p>
                        
                        {/* Decorative line */}
                        <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;

