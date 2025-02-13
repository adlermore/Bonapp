
import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/img/footerLogo.png';
import payment1 from '../../assets/img/payment1.png';
import payment2 from '../../assets/img/payment2.png';
import payment3 from '../../assets/img/payment3.png';

const Footer = () => {
    return (
        <footer className="page_footer">
            <div className="custom_container">
                <div className="footer_inner">
                    <div className="footer_logo">
                        <Link to="/"><img src={footerLogo} alt="footerLogo" /></Link>
                    </div>
                    <ul className="footer_menu">
                        <li>
                            <a href="/#" className="menu_title">Categories</a>
                            <a href="/#" className="menu_link">Restaurant</a>
                            <a href="/#" className="menu_link">Caffe</a>
                            <a href="/#" className="menu_link">Food</a>
                            <a href="/#" className="menu_link">Bar</a>
                        </li>
                        <li>
                            <a href="/#" className="menu_title">Information</a>
                            <a href="/#" className="menu_link">Best sellers</a>
                            <a href="/#" className="menu_link">How to become a partner</a>
                            <a href="/#" className="menu_link">Privacy policy</a>
                            <a href="/#" className="menu_link">Our terms</a>
                        </li>
                        <li>
                            <div className="social_list">
                                <a href="/#" className="icon-facebook"> </a>
                                <a href="/#" className="icon-instagram"> </a>
                                <a href="/#" className="icon-linkedin"> </a>
                                <a href="/#" className="icon-telegram"> </a>
                                <a href="/#" className="icon-tiktok"> </a>
                                <a href="/#" className="icon-whatsapp"> </a>
                            </div>
                            <div className="payment_block">
                                <div>
                                    <span><img src={payment1} alt="paymentImg" /></span>
                                    <span><img src={payment3} alt="paymentImg" /></span>
                                    <span><img src={payment2} alt="paymentImg" /></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='app_dwonload'>
                        <div className='download_title'>Download our application</div>
                        <a href="/#" className='icon-apple footer_app'>App Store</a>
                        <a href="/#" className='icon-android footer_app'>Play Market</a>
                    </div>
                </div>
                <div className="footer_copytoght">
                    Copyright 2024 / Website by  <a target='blank' href="https://lightdesignstudio.am/" >Light Design Studio</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;














