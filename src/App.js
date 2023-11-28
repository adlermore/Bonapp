import React, { useEffect, useState } from "react";
import {Route, Routes , useLocation} from 'react-router-dom';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
import Restaurant from './pages/Restaurant';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(true);
  const [WelcomPageToggle, setWelcomPageToggle] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      document.body.style.overflow = 'hidden';
      setWelcomPageToggle(false)
    } else {
      document.body.style.overflow = 'auto';
      setWelcomPageToggle(true)
    }

    const handleLoad = () => {
      console.log('True!');
      setLoading(false)
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
    
  }, [location.pathname]);

  return (
    <div className='page-wrapper'>
      {loading &&
        <div className='loader_section'>
          <div className="pan-loader">
            <div className="loader"></div>
            <div className="pan-container">
              <div className="pan"></div>
              <div className="handle"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      }
      <Header positionRelative={WelcomPageToggle}/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
      {WelcomPageToggle && <Footer />}
    </div>
  );
}

export default App;
