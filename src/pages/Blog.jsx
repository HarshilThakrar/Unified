import { motion } from 'framer-motion';
import Container from '../components/UI/Container.jsx';
import SectionTitle from '../components/UI/SectionTitle.jsx';

/**
 * Blog/News page
 */
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Advancements in Post-Tensioning Technology',
      date: 'March 15, 2024',
      category: 'Technology',
      excerpt: 'Exploring the latest innovations in post-tensioning systems and how they\'re revolutionizing construction.',
      image: 'tech',
    },
    {
      id: 2,
      title: 'Successful Completion of Major Infrastructure Project',
      date: 'February 28, 2024',
      category: 'Projects',
      excerpt: 'Celebrating the successful completion of our largest infrastructure project to date.',
      image: 'project',
    },
    {
      id: 3,
      title: 'Benefits of Post-Tensioning in High-Rise Buildings',
      date: 'February 10, 2024',
      category: 'Engineering',
      excerpt: 'Understanding how post-tensioning enhances structural performance in modern high-rise construction.',
      image: 'engineering',
    },
    {
      id: 4,
      title: 'Quality Standards in Post-Tensioning Systems',
      date: 'January 25, 2024',
      category: 'Quality',
      excerpt: 'A comprehensive guide to quality assurance and testing in post-tensioning installations.',
      image: 'quality',
    },
    {
      id: 5,
      title: 'Sustainable Construction with Post-Tensioning',
      date: 'January 12, 2024',
      category: 'Sustainability',
      excerpt: 'How post-tensioning contributes to sustainable building practices and reduces environmental impact.',
      image: 'sustainability',
    },
    {
      id: 6,
      title: 'Industry Trends and Future Outlook',
      date: 'December 30, 2023',
      category: 'Industry',
      excerpt: 'Analyzing current trends and future predictions for the post-tensioning industry.',
      image: 'industry',
    },
  ];

  const categories = ['All', 'Technology', 'Projects', 'Engineering', 'Quality', 'Sustainability', 'Industry'];

  return (
    <div className="blog-page pt-24">
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
              Blog & News
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Stay updated with the latest news, insights, and trends in post-tensioning systems.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-accent">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 border-2 border-accent rounded-lg hover:border-primary hover:text-primary transition-colors font-heading font-semibold uppercase text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl text-primary opacity-50">{post.image.charAt(0).toUpperCase()}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-heading font-semibold uppercase text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-light">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text uppercase mb-3">
                    {post.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-primary font-heading font-semibold uppercase text-sm hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-accent-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-heading font-bold text uppercase mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-text-light mb-6">
              Get the latest updates, news, and insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border-2 border-accent rounded-lg focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white font-heading font-semibold uppercase rounded-lg hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;

