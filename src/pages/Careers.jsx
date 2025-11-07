import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';
import Button from '../components/UI/Button.jsx';

/**
 * Careers page
 */
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
  });

  const openPositions = [
    {
      id: 1,
      title: 'Senior Post-Tensioning Engineer',
      location: 'Mumbai, India',
      type: 'Full-time',
      department: 'Engineering',
      description: 'We are seeking an experienced Senior Post-Tensioning Engineer to lead our design and engineering team.',
      requirements: [
        'Bachelor\'s degree in Civil/Structural Engineering',
        '10+ years of experience in post-tensioning',
        'Strong technical knowledge',
        'Excellent communication skills',
      ],
    },
    {
      id: 2,
      title: 'Installation Technician',
      location: 'Multiple Locations',
      type: 'Full-time',
      department: 'Installation',
      description: 'Join our installation team as a certified post-tensioning technician.',
      requirements: [
        'Certification in post-tensioning',
        'Physical fitness for field work',
        'Attention to detail',
        'Team player',
      ],
    },
    {
      id: 3,
      title: 'Quality Assurance Inspector',
      location: 'Delhi, India',
      type: 'Full-time',
      department: 'Quality Control',
      description: 'Ensure quality standards in all our post-tensioning projects.',
      requirements: [
        'Quality inspection experience',
        'Knowledge of construction standards',
        'Detail-oriented',
        'Certification preferred',
      ],
    },
    {
      id: 4,
      title: 'Business Development Manager',
      location: 'Bangalore, India',
      type: 'Full-time',
      department: 'Sales & Marketing',
      description: 'Expand our client base and build relationships in the construction industry.',
      requirements: [
        'Sales experience in construction',
        'Strong networking skills',
        'Business acumen',
        'Communication skills',
      ],
    },
  ];

  const benefits = [
    'Competitive salary package',
    'Health insurance',
    'Professional development',
    'Work-life balance',
    'Growth opportunities',
    'Team collaboration',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted! (This is a demo)');
  };

  return (
    <div className="careers-page pt-24">
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
              Careers at Unifide
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Join our team of experts and build your career in post-tensioning systems.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Why Work With Us" subtitle="Benefits & Perks" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-accent-light p-6 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="text font-semibold">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-accent-light">
        <Container>
          <SectionTitle title="Open Positions" subtitle="Current Opportunities" />
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text uppercase mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-text-light">
                      <span>📍 {position.location}</span>
                      <span>💼 {position.type}</span>
                      <span>🏢 {position.department}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(selectedJob === position.id ? null : position.id)}
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    {selectedJob === position.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>

                <p className="text-text-light mb-4">{position.description}</p>

                {selectedJob === position.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-accent"
                  >
                    <h4 className="font-heading font-bold text uppercase mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-text-light">
                          <span className="text-primary mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => setFormData({ ...formData, position: position.title })}>
                      Apply Now
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Form */}
      {formData.position && (
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-accent"
              >
                <h2 className="text-3xl font-heading font-bold text uppercase mb-6 text-center">
                  Apply for {formData.position}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-heading font-semibold uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold uppercase mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold uppercase mb-2">
                      Upload Resume *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="w-full px-6 py-4 border-2 border-accent rounded-lg"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </motion.div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default Careers;

