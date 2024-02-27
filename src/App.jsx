import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import './app.scss';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Writing from './pages/Writing';
import NotFound from './pages/NotFound';
import Footer from "./components/footer/Footer"; 
import Header from './components/header/Header';
import ArticleDetail from './pages/ArticleDetail';


ReactGA.initialize('UA-47161798-1');

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/writing" element={<Writing />} />
            <Route exact path="/case-studies/:articleName" element={<CaseStudies />} />
            <Route exact path="/articles/:articleName" element={<ArticleDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
