import { motion } from 'framer-motion';

/**
 * Service card component with hover glow and scroll reveal
 */
const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="bg-accent p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary glow-cyan group"
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-heading font-bold text uppercase mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
