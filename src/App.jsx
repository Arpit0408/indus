import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';  // Import here

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

import AdminBlog from './admin/Blog.jsx';
import BlogForm from './admin/BlogForm.jsx';
import TermsAndConditions from './pages/TermsAndConditions';

import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <Layout>
          <ScrollToTop />  {/* Add here */}
          <Routes>
            {/* Your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/service" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termsandconditions " element={<TermsAndConditions  />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/blog/new" element={<BlogForm />} />
            <Route path="/admin/blog/:postId" element={<BlogForm />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
