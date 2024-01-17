import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
import Restaurant from './pages/Restaurant';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import { useTransition, animated } from 'react-spring';



function App() {

  const [loading, setLoading] = useState(true);
  const [WelcomPageToggle, setWelcomPageToggle] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setTimeout(() => {
      if (currentPath === '/') {
        document.body.style.overflow = 'hidden';
        setWelcomPageToggle(false)
      } else {
        document.body.style.overflow = 'auto';
        setWelcomPageToggle(true)
      }
    }, 350);


    const handleLoad = () => {
      setLoading(false)
    };

    setTimeout(() => {
      handleLoad();
    }, 1500);

  }, [location.pathname]);



  const transitions = useTransition(location, {
    from: { opacity: 0  },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration : 300
    }
  });


  return (
    <>
      {transitions((props, item) => (
        <animated.div style={props}>
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
            <Header WelcomPageToggle={WelcomPageToggle} />
            <Routes location={item}>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/restaurant/:id" element={<Restaurant />} />
            </Routes>
            {WelcomPageToggle && <Footer />}
          </div>
        </animated.div>
      ))}
    </>
  );
}

export default App;
