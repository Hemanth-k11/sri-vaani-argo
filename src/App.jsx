import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar     from './components/Navbar';
import Footer     from './components/Footer';
import FloatingContact from './components/FloatingContact';
import HomePage   from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage  from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPageNew';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current page from URL path
  const getPageFromPath = (path) => {
    const pathMap = {
      '/': 'home',
      '/products': 'products',
      '/about': 'about',
      '/gallery': 'gallery',
      '/contact': 'contact',
    };
    return pathMap[path] || 'home';
  };

  const currentPage = getPageFromPath(location.pathname);

  const handleNavigate = (page) => {
    const pathMap = {
      home: '/',
      products: '/products',
      about: '/about',
      gallery: '/gallery',
      contact: '/contact',
    };
    navigate(pathMap[page] || '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update document title per page
  useEffect(() => {
    const titles = {
      home:     'Sri Vaani Agro Industries | Agro Machinery Manufacturers – Guntur',
      products: 'Products | Sri Vaani Agro Industries',
      about:    'About Us | Sri Vaani Agro Industries',
      contact:  'Contact Us | Sri Vaani Agro Industries',
      gallery:  'Gallery | Sri Vaani Agro Industries',   
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/products" element={<ProductsPage onNavigate={handleNavigate} />} />
        <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
        <Route path="/gallery" element={<GalleryPage onNavigate={handleNavigate} />} />
        <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
      </Routes>

      <Footer onNavigate={handleNavigate} />
      <FloatingContact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
