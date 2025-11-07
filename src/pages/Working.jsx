import { motion } from 'framer-motion';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * How It Works / Working Process page
 */
const Working = () => {
  const steps = [
    {
      number: '01',
      title: 'Planning & Design',
      description: 'Our team collaborates with engineers and architects to design the optimal post-tensioning system for your project.',
      icon: '📐',
    },
    {
      number: '02',
      title: 'Material Preparation',
      description: 'High-quality unbonded post-tensioning strands are prepared and tested according to project specifications.',
      icon: '🔧',
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Expert technicians install the post-tensioning system with precision, ensuring proper placement and tensioning.',
      icon: '⚙️',
    },
    {
      number: '04',
      title: 'Tensioning',
      description: 'Strands are tensioned to the required force using calibrated equipment, monitored by certified professionals.',
      icon: '💪',
    },
    {
      number: '05',
      title: 'Grouting & Protection',
      description: 'After tensioning, the system is protected with grout and corrosion-resistant materials for long-term durability.',
      icon: '🛡️',
    },
    {
      number: '06',
      title: 'Quality Assurance',
      description: 'Final inspection and testing ensure the system meets all quality standards and project requirements.',
      icon: '✅',
    },
  ];

  const benefits = [
    {
      title: 'Enhanced Structural Performance',
      description: 'Post-tensioning increases load capacity and reduces deflection, allowing for longer spans and thinner slabs.',
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduces material usage (concrete and steel), leading to significant cost savings on large projects.',
    },
    {
      title: 'Faster Construction',
      description: 'Enables faster construction cycles by reducing the need for temporary supports and formwork.',
    },
    {
      title: 'Durability',
      description: 'Improves crack control and enhances the long-term durability of concrete structures.',
    },
  ];

  return (
    <div className="working-page pt-24">
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
              How Post-Tensioning Works
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Understanding the science and process behind post-tensioning systems
              and how they enhance structural performance.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Our Process" subtitle="Step by Step" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-primary"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-6xl font-heading font-bold text-primary/20">
                    {step.number}
                  </span>
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Diagram */}
      <section className="py-20 bg-accent-light">
        <Container>
          <SectionTitle title="How Post-Tensioning Works" subtitle="Technical Overview" />
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text uppercase mb-2">
                      Pre-Stressing
                    </h4>
                    <p className="text-text-light leading-relaxed">
                      High-strength steel strands are placed in ducts within the concrete structure.
                      These strands are tensioned after the concrete has gained sufficient strength.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text uppercase mb-2">
                      Compression Transfer
                    </h4>
                    <p className="text-text-light leading-relaxed">
                      The tensioned strands compress the concrete, creating internal forces that
                      counteract external loads and improve structural performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text uppercase mb-2">
                      Anchorage
                    </h4>
                    <p className="text-text-light leading-relaxed">
                      The tension is maintained through specialized anchorages that transfer the
                      force from the strands to the concrete structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text uppercase mb-2">
                      Protection
                    </h4>
                    <p className="text-text-light leading-relaxed">
                      Unbonded systems use protective sheathing, while bonded systems use grout
                      to protect the strands from corrosion and ensure long-term durability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Key Benefits" subtitle="Why Post-Tensioning" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-accent-light p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-heading font-bold text uppercase mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Working;

