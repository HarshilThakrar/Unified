import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Working from './pages/Working.jsx';
import Projects from './pages/Projects.jsx';
import Team from './pages/Team.jsx';
import Careers from './pages/Careers.jsx';
import Blog from './pages/Blog.jsx';
import FAQ from './pages/FAQ.jsx';
import Brochure from './pages/Brochure.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App min-h-screen flex flex-col">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
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
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
