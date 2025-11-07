import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Working = lazy(() => import('./pages/Working.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Team = lazy(() => import('./pages/Team.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const Brochure = lazy(() => import('./pages/Brochure.jsx'));
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="App min-h-screen flex flex-col">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loader isLoading={true} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/working" element={<Working />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/brochure" element={<Brochure />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
