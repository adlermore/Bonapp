import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from '../../assets/img/logo.png';
import { Spin as Hamburger } from 'hamburger-react'
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

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

    const { register,  handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    const { register: login, handleSubmit: handleSubmitForm2, formState: { errorsLogin } } = useForm({
        shouldFocusError: false,
    });


    const onSubmit = () => {
        console.log('success !');
    };

    const onLoginSubmit = () => {
        console.log('success !');
    };



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
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={WelcomPageToggle ? 'page_header ' : 'page_header welcome_header'} id="header">
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
                                    <a href="/#" className="login_btn" onClick={(e) => signToggleSwitch(e)}> Sign In</a>
                                </div>
                                <div className="static_inline">
                                    <div className="static_description">
                                        To keep connected with us please login with your personal info
                                    </div>
                                    <a href="/#" className="login_btn" onClick={(e) => signToggleSwitch(e)}> Sign Up</a>
                                </div>
                            </div>
                            <div className={signToggle ? 'sign_container  toggled' : 'sign_container'}>
                                <div className="sign_inner registration_container">
                                    <div className="sign_title">Create Account</div>
                                    <div className="social_list">
                                        <a href="/#" className="social_link icon-google"> </a>
                                        <a href="/#" className="social_link icon-fb"> </a>
                                        <a href="/#" className="social_link icon-apple"> </a>
                                    </div>
                                    <div className="inner_description">Or use your email for registration:</div>
                                    <div className="sign_form">
                                        <form onSubmit={handleSubmitForm1(onSubmit)}>
                                            <div className={errors?.user_name?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                                <div className='block_label icon-user'></div>
                                                <input placeholder="First Name*" className="form-control" name="user_name" {...register("user_name", { required: true })} />
                                                <p className="error-info" >This field is required</p>
                                            </div>
                                            <div className={errors?.user_email?.type === "required" || errors?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >
                                                <div className='block_label icon-mail'></div>
                                                <input placeholder="Email" className="form-control" name="user_email" {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                                                {errors?.user_email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                                    <p className="error-info" >This field is required</p>}
                                            </div>
                                            <div className={errors?.password?.type === "required" ? "form-block has-error" : "form-block"}  >
                                                <div className='block_label icon-pass'></div>
                                                <input type="password" placeholder="Password" className="form-control" name="password" {...register("password", { required: true })} />
                                                <p className="error-info" >This field is required</p>
                                            </div>
                                            <div className="checkbox_line">
                                                <label htmlFor="checkbox1">
                                                    <input type="checkbox" id="checkbox1" />
                                                    <span className="fake_check icon-done"></span>
                                                    <span className="checkbox_description">I accept all terms and conditions</span>
                                                </label>
                                            </div>
                                            <button type='submit' className="site_btn sign-btn">Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sign_inner login_container">
                                    <div className="sign_title">Create Account</div>
                                    <div className="social_list">
                                        <a href="/#" className="social_link icon-google"> </a>
                                        <a href="/#" className="social_link icon-fb"> </a>
                                        <a href="/#" className="social_link icon-apple"> </a>
                                    </div>
                                    <div className="inner_description">Or use your email for registration:</div>
                                    <div className="sign_form">
                                        <form onSubmit={handleSubmitForm2(onLoginSubmit)}>
                                            <div className={errorsLogin?.user_email?.type === "required" || errorsLogin?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >
                                                <div className='block_label icon-mail'></div>
                                                <input placeholder="Email" className="form-control" name="user_email" {...login("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                                                {errorsLogin?.user_email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                                    <p className="error-info" >This field is required</p>}
                                            </div>
                                            <div className={errorsLogin?.password?.type === "required" ? "form-block has-error" : "form-block"}  >
                                                <div className='block_label icon-pass'></div>
                                                <input type="password" placeholder="Password" className="form-control" name="password" {...login("phone_number", { required: true })} />
                                                <p className="error-info" >This field is required</p>
                                            </div>
                                            <div className="inner_description">Forget your password?</div>
                                            <button type='submit' className="site_btn sign-btn">Sign In</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Header;