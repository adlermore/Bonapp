import React, { useEffect , useState} from "react";
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.getElementsByClassName('welcome_page').length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setTimeout(()=>{
      setLoading(false)
    },5000)
  }, []);

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
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
