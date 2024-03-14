import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from '../../assets/img/logo.png';
import { Spin as Hamburger } from 'hamburger-react'
import { Controller, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Select from 'react-select';
import NotificationMessage from "../NotificationMessage/NotificationMessage";

const optionsGender = [
    { value: 'Manle', label: 'Manle' },
    { value: 'Female', label: 'Female' }
];

const optionsEmployment = [
    { value: 'Student', label: 'Student' },
    { value: 'Worker', label: 'Worker' },
    { value: 'Owner', label: 'Owner' },
];

const optionsPreferredClothing = [
    { value: 'Sports', label: 'Sports' },
    { value: 'Classic', label: 'Classic' },
    { value: 'Routine', label: 'Routine' },
];

const optionsRegions = [
    { value: 'Yerevan', label: 'Yerevan' },
    { value: 'Aragatsotn', label: 'Aragatsotn' },
    { value: 'Ararat', label: 'Ararat' },
    { value: 'Armavir', label: 'Armavir' },
    { value: 'Gegharkunik', label: 'Gegharkunik' },
    { value: 'Kotayk', label: 'Kotayk' },
    { value: 'Lori', label: 'Lori' },
    { value: 'Shirak', label: 'Shirak' },
    { value: 'Syunik', label: 'Syunik' },
    { value: 'Tavush', label: 'Tavush' },
    { value: 'Vayots Dzor', label: 'Vayots Dzor' }
];

const Header = ({ WelcomPageToggle }) => {

    const [isOpen, setOpen] = useState(false);
    const [popupopened, setPopupopened] = useState(false);
    const [signToggle, setSignToggle] = useState(false);
    const [lgopened, setlgopened] = useState(false);
    const [searchOpened, setsearchOpened] = useState(false);
    const [registerNext, setregisterNext] = useState(false);
    const [isSuccessMessage, setisSuccessMessage] = useState(null);

    const headerRef = useRef(null);
    const SearchRef = useRef(null);
    const menuPortalTargetRef = useRef(null);

    useEffect(() => {
        const handleBodyClick = () => {
            setsearchOpened(false)
            setlgopened(false);
            if (registerNext === false && isSuccessMessage === null) {
                setPopupopened(false);
                setTimeout(() => {
                    setregisterNext(false)
                }, 500);
            }
        };

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [registerNext ,isSuccessMessage]);

    const ToggleMobile = () => {
        setsearchOpened(true);
        setlgopened(false);
        setOpen(!isOpen);
        if (document.body.classList.contains('menu_opened')) {
            document.body.classList.remove('menu_opened')
            document.body.classList.add('menu_changed')
        } else {
            document.body.classList.add('menu_opened')
        }
    }

    const { register, handleSubmit: handleSubmitForm1, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    const { register: login, handleSubmit: handleSubmitForm2, formState: { errors: errorsLogin } } = useForm({
        shouldFocusError: false,
    });

    const { register: registerLast, control, handleSubmit: handleSubmitForm3, formState: { errors: errorsRegisterLast } } = useForm({
        shouldFocusError: false,
    });

    const onSubmit = (data) => {
        // console.log('success !', data);
        setregisterNext(true);
    };

    const onLoginSubmit = () => {
        console.log('success !');
        setisSuccessMessage(false);
        setTimeout(() => {
            setisSuccessMessage(null);
        }, 2500);
    };

    const onRegisterLastSubmit = () => {
        console.log('success !');
        setisSuccessMessage(true);
        setTimeout(() => {
            setregisterNext(false)
            setSignToggle(!signToggle)
        }, 2500);
        setregisterNext(true);
    };

    const LoginPopupOpen = (e) => {
        e.stopPropagation();
        setlgopened(false);
        if (document.body.classList.contains('menu_opened')) {
            setTimeout(() => {
                setOpen(false);
                document.body.classList.remove('menu_opened')
            }, 500);
        }
        e.preventDefault();
        setPopupopened(true);
        if (WelcomPageToggle) {
            document.getElementById('wrapper').classList.add('scrollbarWidth');
            headerRef.current.classList.add('scrollbarWidth');
            document.body.style.overflow = 'hidden';
        }
    }

    const LoginPopupClose = (e) => {
        e.preventDefault();
        if (WelcomPageToggle) {
            WelcomPageToggle = true;
            document.getElementById('wrapper').classList.remove('scrollbarWidth');
            headerRef.current.classList.remove('scrollbarWidth');
            document.body.style.overflow = 'auto';
        }
        setPopupopened(false);
        setTimeout(() => {
            setregisterNext(false)
        }, 500);
    }

    const signToggleSwitch = (e) => {
        e.preventDefault();
        setSignToggle(!signToggle)
    }

    const handleLgToggle = (e) => {
        e.stopPropagation();
        setlgopened(!lgopened)
        if (!document.body.classList.contains('menu_opened')) {
            setsearchOpened(false)
        }
    }

    const inputToggleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (SearchRef.current) {
            if (!document.body.classList.contains('menu_opened')) {
                setsearchOpened(!searchOpened)
            }
            setlgopened(false);
        }
    }

    const customStyles = {
        option: (provided, state) => {
            return {
                ...provided,
                boxShadow: '0 !important',
                color: state.data === state.selectProps.value ? "white" : "#005848cc",
                backgroundColor: state.data === state.selectProps.value ? "#005848cc" : "white"
            };
        },
        menuPortal: base => ({ ...base, zIndex: 9999, position: 'absolute' }),

    };

    return (
        <>
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={headerRef}
                className={WelcomPageToggle ? 'page_header ' : 'page_header welcome_header'} id="header" >
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
                                <li><Link to="/">New</Link></li>
                                <li><Link to="/">For cooperation</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li>
                                    <a href="/#" onClick={(e) => { LoginPopupOpen(e) }}>
                                        login
                                    </a>
                                </li>
                                <li className={searchOpened ? 'search_li opened' : 'search_li'}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <input type="text" ref={SearchRef} placeholder="Search Restaurant" />
                                    <a href="/#" className="icon-search"
                                        onClick={(e) => { inputToggleSubmit(e) }}
                                    > </a>
                                </li>
                                <li onClick={(e) => handleLgToggle(e)} className={lgopened ? 'lg_container opened' : 'lg_container'}>
                                    <a href="/#" onClick={(e) => e.preventDefault()} className="icon-language lg_block"> English </a>
                                    <div className="dropdown_list">
                                        <a href="/#" className="drop_li"> Russian </a>
                                        <a href="/#" className="drop_li"> Armenian </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={popupopened ? ' login_opened popup_container' : 'popup_container'}>
                    <div className="login_popup popup">
                        <div className="popup_inner">
                            <div className={registerNext ? 'popup_container register_next' : 'popup_container '}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <a href="/#" className={signToggle ? 'popup_close icon-close reverse' : 'popup_close icon-close '} onClick={(e) => LoginPopupClose(e)}> </a>
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
                                                <div className="mobile_sign">
                                                    <div className="sign_description"> Do you Have an Acoount ?</div>
                                                    <a href="/#" className="login_btn " onClick={(e) => signToggleSwitch(e)}> Sign In</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sign_inner registerNext_container">
                                        <div className="sign_title">Create Account</div>
                                        <div className="inner_description">Please fill in the required fields to find the most comfortable table for you.</div>
                                        <div className="sign_form">
                                            <form onSubmit={handleSubmitForm3(onRegisterLastSubmit)}>
                                                <div className={errorsRegisterLast?.gender?.type === "required" ? "form-block sellect_section has-error" : "form-block"}
                                                    ref={menuPortalTargetRef}
                                                >
                                                    <Controller
                                                        name="gender"
                                                        control={control}
                                                        rules={{ required: 'Please select a Gender' }}
                                                        render={({ field }) => (
                                                            <Select
                                                                className="form_sellect"
                                                                options={optionsGender}
                                                                placeholder="Gender*"
                                                                onChange={(e) => field.onChange(e.value)}
                                                                menuPortalTarget={document.body}
                                                                styles={customStyles}
                                                            />
                                                        )}
                                                    />
                                                    <p className="error-info" >This field is required</p>
                                                </div>
                                                <div className={errorsRegisterLast?.age?.type === "required" || errorsRegisterLast?.age?.type === "min" || errorsRegisterLast?.age?.type === "max" ? "form-block has-error" : "form-block"}  >
                                                    <input type="number" placeholder="Age" className="form-control" name="age" {...registerLast("age", { required: true, min: 18, max: 99 })} />
                                                    {errorsRegisterLast?.age?.type === "min" && <p className="error-info">Age must be at least 18</p>}
                                                    {errorsRegisterLast?.age?.type === "max" && <p className="error-info">Age must be at most 99</p>}
                                                    {errorsRegisterLast?.age?.type === "required" && <p className="error-info">This field is required</p>}
                                                </div>
                                                <div className={errorsRegisterLast?.Employment?.type === "required" ? "form-block sellect_section has-error" : "form-block"}  >
                                                    <Controller
                                                        name="Employment"
                                                        control={control}
                                                        rules={{ required: 'Please select a Employment Sectors' }}
                                                        render={({ field }) => (
                                                            <Select
                                                                className="form_sellect"
                                                                options={optionsEmployment}
                                                                placeholder="Employment sectors*"
                                                                onChange={(e) => field.onChange(e.value)}
                                                                menuPortalTarget={document.body}
                                                                styles={customStyles}
                                                            />
                                                        )}
                                                    />
                                                    <p className="error-info" >This field is required</p>
                                                </div>
                                                <div className={errorsRegisterLast?.PreferredClothing?.type === "required" ? "form-block sellect_section has-error" : "form-block"}  >
                                                    <Controller
                                                        name="PreferredClothing"
                                                        control={control}
                                                        rules={{ required: 'Please select a PreferredClothing Sectors' }}
                                                        render={({ field }) => (
                                                            <Select
                                                                className="form_sellect"
                                                                options={optionsPreferredClothing}
                                                                placeholder="Preferred clothing*"
                                                                onChange={(e) => field.onChange(e.value)}
                                                                menuPortalTarget={document.body}
                                                                styles={customStyles}
                                                            />
                                                        )}
                                                    />
                                                    <p className="error-info" >This field is required</p>
                                                </div>
                                                <div className={errorsRegisterLast?.Region?.type === "required" ? "form-block sellect_section has-error" : "form-block"}  >
                                                    <Controller
                                                        name="Region"
                                                        control={control}
                                                        rules={{ required: 'Please select a Region' }}
                                                        render={({ field }) => (
                                                            <Select
                                                                className="form_sellect"
                                                                options={optionsRegions}
                                                                placeholder="Region*"
                                                                onChange={(e) => field.onChange(e.value)}
                                                                menuPortalTarget={document.body}
                                                                styles={customStyles}
                                                            />
                                                        )}
                                                    />
                                                    <p className="error-info" >This field is required</p>
                                                </div>
                                                <button type='submit' className="site_btn sign-btn">Sign UP</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="sign_inner login_container">
                                        <div className="sign_title">Login</div>
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
                                                    <input type="password" placeholder="Password" className="form-control" name="password" {...login("password", { required: true })} />
                                                    <p className="error-info" >This field is required</p>
                                                </div>
                                                <div className="inner_description">Forget your password?</div>
                                                <button type='submit' className="site_btn sign-btn">Sign In</button>
                                                <div className="mobile_sign">
                                                    <div className="sign_description"> New to Bonapp ? </div>
                                                    <a href="/#" className="login_btn" onClick={(e) => signToggleSwitch(e)}> Sign Up</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>
            <NotificationMessage isSuccess={isSuccessMessage} />
        </>
    )
}

export default Header;