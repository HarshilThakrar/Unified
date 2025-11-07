import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';
import Button from '../components/UI/Button.jsx';

/**
 * Brochure download page
 */
const Brochure = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Simulate download
    setTimeout(() => {
      // In real app, this would trigger actual download
      alert('Brochure download started! (This is a demo)');
    }, 500);
  };

  return (
    <div className="brochure-page pt-24">
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
              Download Our Brochure
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Get comprehensive information about our post-tensioning systems,
              services, and project portfolio.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-accent"
            >
              <h2 className="text-3xl font-heading font-bold text uppercase mb-6 text-center">
                Request Brochure
              </h2>
              <p className="text-text-light text-center mb-8">
                Please fill out the form below to download our company brochure.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-heading font-semibold uppercase tracking-wider text mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-heading font-semibold uppercase tracking-wider text mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-heading font-semibold uppercase tracking-wider text mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-heading font-semibold uppercase tracking-wider text mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-heading font-semibold uppercase tracking-wider text mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-accent rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <option value="">Select Project Type</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="residential">Residential Complex</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex justify-center pt-4">
                  <Button type="submit" disabled={isSubmitting} className="min-w-[200px]">
                    {isSubmitting ? 'Processing...' : 'Download Brochure'}
                  </Button>
                </div>
              </form>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-primary/10 border-2 border-primary rounded-lg text-center"
                >
                  <p className="text-primary font-heading font-semibold">
                    ✓ Thank you! Your brochure download will begin shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-accent-light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-heading font-bold text uppercase mb-2">
                Comprehensive Information
              </h3>
              <p className="text-text-light text-sm">
                Detailed overview of our services and capabilities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-heading font-bold text uppercase mb-2">
                Project Portfolio
              </h3>
              <p className="text-text-light text-sm">
                Showcase of our completed projects and achievements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-heading font-bold text uppercase mb-2">
                Contact Information
              </h3>
              <p className="text-text-light text-sm">
                Easy access to our team and contact details
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Brochure;

