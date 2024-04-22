
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
import './app.css'
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import TopHeader from './common/topHeader/TopHeader';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import ScrollToTop from './common/ScrollToTop';
import Blogs from './pages/Blogs';

const App = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

      <BrowserRouter>
        <div className="top-to-btm">
          {showTopBtn && (
            <FaAngleUp
              className="icon-position icon-style "
              style={{ zIndex: 199 }}
              onClick={goToTop}
            />
          )}
        </div>
        <ScrollToTop />

        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Experience />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
            <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
