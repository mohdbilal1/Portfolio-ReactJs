
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
import './app.css'

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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
