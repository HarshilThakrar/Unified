import { motion } from 'framer-motion';

/**
 * Button component with hover glow and scale animations
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button variant ('primary' | 'secondary' | 'outline')
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'px-8 py-4 rounded-lg font-heading font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark glow-cyan',
    secondary: 'bg-accent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
