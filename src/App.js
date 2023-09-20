import React , { useEffect } from "react";
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

import { Route, Routes } from 'react-router-dom';

function App() {

  useEffect(() => {
    if(document.getElementsByClassName('welcome_page').length>0) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
  },[]);

  return (
    <div className='page-wrapper'>
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
