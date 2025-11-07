import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * FAQ page
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is post-tensioning?',
      answer: 'Post-tensioning is a method of reinforcing concrete by applying compression to it after it has been cast. This is done by tensioning high-strength steel strands (tendons) that run through the concrete, creating internal forces that improve the structure\'s performance.',
    },
    {
      question: 'What are the benefits of post-tensioning?',
      answer: 'Post-tensioning offers several benefits including increased load capacity, reduced deflection, longer spans, thinner slabs, better crack control, cost savings through reduced material usage, and faster construction times.',
    },
    {
      question: 'What is the difference between bonded and unbonded post-tensioning?',
      answer: 'Bonded post-tensioning uses grout to bond the tendons to the concrete, while unbonded post-tensioning uses protective sheathing that allows the tendons to move independently. Unbonded systems are more common in building construction due to their flexibility and ease of installation.',
    },
    {
      question: 'How long does post-tensioning installation take?',
      answer: 'Installation time varies based on project size and complexity. Typically, post-tensioning can be installed alongside other construction activities, and the actual tensioning process is relatively quick. Our team works efficiently to minimize impact on overall construction schedules.',
    },
    {
      question: 'What quality assurance measures do you follow?',
      answer: 'We follow strict quality assurance protocols including material testing, certified installation procedures, tension testing, regular inspections, and comprehensive documentation. All our technicians are certified and our systems meet international quality standards.',
    },
    {
      question: 'Do you provide design services?',
      answer: 'Yes, we offer comprehensive design and engineering services. Our team works closely with architects and structural engineers to design optimal post-tensioning systems for each project.',
    },
    {
      question: 'What types of projects do you handle?',
      answer: 'We handle a wide range of projects including commercial buildings, residential complexes, infrastructure projects (bridges, parking structures), and industrial facilities. Our expertise spans various construction types and scales.',
    },
    {
      question: 'How do I request a quote?',
      answer: 'You can request a quote by contacting us through our contact form, email, or phone. We\'ll need project details including location, type, size, and timeline. Our team will provide a detailed quotation within 24-48 hours.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we provide ongoing maintenance and repair services for post-tensioning systems. This includes regular inspections, preventive maintenance, and repair services to ensure long-term performance.',
    },
    {
      question: 'What is your service area?',
      answer: 'We currently serve projects across India with a focus on major metropolitan areas. We also take on international projects. Contact us to discuss your specific location and project requirements.',
    },
  ];

  return (
    <div className="faq-page pt-24">
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Find answers to common questions about post-tensioning systems and our services.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Items */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border-2 border-accent rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-heading font-bold text uppercase pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-text-light leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-accent-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-heading font-bold text-text uppercase mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-light mb-6">
              Our team is here to help. Contact us for more information or to discuss your specific project needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-heading font-semibold uppercase tracking-wider rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default FAQ;

