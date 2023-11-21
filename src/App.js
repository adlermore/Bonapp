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
    
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1500)


    const handleLoad = () => {
      console.log('Страница загружена!');
      setLoading(false)
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };

    // const existingScript = document.querySelector('script[src="js/TweenMax.min.js"]');
    
    // if(!existingScript){
    //   const scriptTweenMax = document.createElement('script');
    //   scriptTweenMax.src = 'js/TweenMax.min.js';
    //   scriptTweenMax.async = true;

    //   const scriptHoverAnimation = document.createElement('script');
    //   scriptHoverAnimation.src = 'js/HoverAnimation.js';
    //   scriptHoverAnimation.async = true;

    //   document.body.appendChild(scriptTweenMax);
    //   document.body.appendChild(scriptHoverAnimation);
    //   return () => {
    //     document.body.removeChild(scriptTweenMax , scriptHoverAnimation );
    //   };
    // }  
    

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
