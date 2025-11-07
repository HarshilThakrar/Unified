import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * Services page with detailed service offerings
 */
const Services = () => {
  const services = [
    {
      title: 'Unbonded Post-Tensioning Systems',
      description: 'High-quality unbonded post-tensioning systems for slabs, beams, and foundations. Our systems feature advanced corrosion protection and long-term durability.',
      features: [
        'Monostrand systems',
        'Multistrand systems',
        'Corrosion protection',
        'Quality assurance',
      ],
      icon: '🔗',
    },
    {
      title: 'Design & Engineering Services',
      description: 'Comprehensive design and engineering support for post-tensioning projects. Our team works closely with architects and structural engineers.',
      features: [
        'Structural analysis',
        'System design',
        'Technical drawings',
        'Consultation services',
      ],
      icon: '📐',
    },
    {
      title: 'Installation & Installation Supervision',
      description: 'Professional installation services with certified technicians. We ensure proper installation according to project specifications.',
      features: [
        'Certified technicians',
        'Quality control',
        'On-site supervision',
        'Progress reporting',
      ],
      icon: '⚙️',
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing and quality assurance protocols to ensure all systems meet industry standards and project requirements.',
      features: [
        'Material testing',
        'Tension testing',
        'Quality inspections',
        'Certification documents',
      ],
      icon: '✅',
    },
    {
      title: 'Maintenance & Repair Services',
      description: 'Ongoing maintenance and repair services to ensure the long-term performance of post-tensioning systems.',
      features: [
        'Regular inspections',
        'Preventive maintenance',
        'Repair services',
        'System upgrades',
      ],
      icon: '🔧',
    },
    {
      title: 'Training & Technical Support',
      description: 'Training programs and technical support for contractors and engineers working with post-tensioning systems.',
      features: [
        'On-site training',
        'Technical documentation',
        'Support services',
        'Best practices',
      ],
      icon: '📚',
    },
  ];

  const applications = [
    {
      title: 'Commercial Buildings',
      description: 'Office buildings, shopping malls, and commercial complexes',
    },
    {
      title: 'Residential Complexes',
      description: 'High-rise apartments, condominiums, and residential towers',
    },
    {
      title: 'Infrastructure Projects',
      description: 'Bridges, highways, parking structures, and tunnels',
    },
    {
      title: 'Industrial Facilities',
      description: 'Warehouses, factories, and industrial buildings',
    },
  ];

  return (
    <div className="services-page pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-text uppercase mb-6">
              Our Services
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Comprehensive post-tensioning solutions from design to installation
              and maintenance.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Service Offerings" subtitle="What We Provide" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-text uppercase mb-4">
                  {service.title}
                </h3>
                <p className="text-text-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-text-light text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-20 bg-accent-light">
        <Container>
          <SectionTitle title="Applications" subtitle="Where We Serve" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-heading font-bold text uppercase mb-3">
                  {application.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {application.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6">
              Need Post-Tensioning Services?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your project requirements and get a
              customized solution.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-heading font-semibold uppercase tracking-wider rounded-lg hover:bg-accent-light transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Services;

