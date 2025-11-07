import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * Our Team page
 */
const Team = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      experience: '25+ years',
      description: 'Expert in post-tensioning systems with extensive industry experience',
      image: 'RK',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Engineer',
      experience: '20+ years',
      description: 'Leading our design and engineering team with technical excellence',
      image: 'PS',
    },
    {
      name: 'Amit Patel',
      role: 'Operations Manager',
      experience: '15+ years',
      description: 'Overseeing project execution and quality assurance',
      image: 'AP',
    },
    {
      name: 'Sneha Desai',
      role: 'Technical Director',
      experience: '18+ years',
      description: 'Specialized in system design and technical consulting',
      image: 'SD',
    },
    {
      name: 'Vikram Singh',
      role: 'Quality Assurance Head',
      experience: '12+ years',
      description: 'Ensuring the highest standards of quality in all projects',
      image: 'VS',
    },
    {
      name: 'Anjali Mehta',
      role: 'Business Development',
      experience: '10+ years',
      description: 'Building relationships and expanding our client base',
      image: 'AM',
    },
  ];

  const departments = [
    {
      name: 'Engineering',
      count: '15+',
      description: 'Certified engineers and designers',
    },
    {
      name: 'Installation',
      count: '30+',
      description: 'Skilled technicians and supervisors',
    },
    {
      name: 'Quality Control',
      count: '10+',
      description: 'Quality assurance specialists',
    },
    {
      name: 'Support',
      count: '8+',
      description: 'Administrative and support staff',
    },
  ];

  return (
    <div className="team-page pt-24">
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
              Our Team
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Meet the experts behind Unifide's success - dedicated professionals
              committed to excellence.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Leadership Team" subtitle="Meet Our Experts" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-heading font-bold text-primary">
                    {member.image}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text uppercase mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-text-light mb-3">{member.experience} Experience</p>
                <p className="text-text-light text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Departments */}
      <section className="py-20 bg-accent-light">
        <Container>
          <SectionTitle title="Our Departments" subtitle="Expert Teams" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md text-center"
              >
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {dept.count}
                </div>
                <h3 className="text-xl font-heading font-bold text uppercase mb-2">
                  {dept.name}
                </h3>
                <p className="text-text-light text-sm">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
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
              Want to Join Our Team?
            </h2>
            <p className="text-text-light text-lg mb-8">
              We're always looking for talented professionals to join our growing team.
            </p>
            <Link
              to="/careers"
              className="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              View Careers
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Team;

