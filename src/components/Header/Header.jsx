import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from '../../assets/img/logo.png';
import { Spin as Hamburger } from 'hamburger-react'

const Header = ({ WelcomPageToggle }) => {

    const [isOpen, setOpen] = useState(false);
    const [popupopened, setPopupopened] = useState(false);
    const [signToggle, setSignToggle] = useState(false);
    
    const ToggleMobile = () => {
        setOpen(!isOpen);
        if (document.body.classList.contains('menu_opened')) {
            document.body.classList.remove('menu_opened')
            document.body.classList.add('menu_changed')
        } else {
            document.body.classList.add('menu_opened')
        }
    }

    const LoginPopupOpen = (e) => {
        e.preventDefault();
        setPopupopened(true)
        document.body.style.overflow = 'hidden';
    }
    const LoginPopupClose = (e) => {
        e.preventDefault();
        document.body.style.overflow = 'auto';
        setPopupopened(false)
    }

    const signToggleSwitch = (e) => {
        e.preventDefault();
        setSignToggle(!signToggle)
    }

    return (
        <header className={WelcomPageToggle ? 'page_header ' : 'page_header welcome_header'} id="header">
            <div className="header_inner">
                <Link to="/" className="logo_block">
                    <img src={logoImg} alt="logo-img" />
                </Link>
                <div className="hamburger_btn">
                    <Hamburger className="burger_btn" toggled={isOpen} toggle={ToggleMobile} />
                </div>
                <div className='header_container'>
                    <div className="container_inner">
                        <ul className="header_menu">
                            <li><Link to="/">Categories</Link></li>
                            <li><Link to="/">Popular</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Search</Link></li>
                            <li><Link to="/">Location</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li>
                                <a
                                    href="/#"
                                    className="icon-user"
                                    onClick={(e) => { LoginPopupOpen(e) }}
                                >
                                    login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={popupopened ? ' login_opened popup_container' : 'popup_container'}>
                <div className="login_popup popup">
                    <div className="popup_inner">
                        <div className="popup_container">
                            <a href="/#" className="popup_close icon_close" onClick={(e) => LoginPopupClose(e)}>X</a>
                            <div className="back_inline">
                                <div className="static_inline">
                                    <div className="static_description">
                                        To keep connected with us please login with your personal info
                                    </div>
                                    <a href="/#" className="login_btn" onClick={(e)=>signToggleSwitch(e)}> Sign in</a>
                                </div>
                                <div className="static_inline">
                                    <div className="static_description">
                                        To keep connected with us please login with your personal info
                                    </div>
                                    <a href="/#" className="login_btn" onClick={(e)=>signToggleSwitch(e)}> Sign up</a>
                                </div>
                            </div>
                            <div className={signToggle ? 'sign_container  toggled': 'sign_container'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header;