import React , {useState} from "react";
import { Link } from "react-router-dom";
import logoImg from '../../assets/img/logo.png';
import { Spin as Hamburger } from 'hamburger-react'

const Header = ({WelcomPageToggle}) => {

    const [isOpen, setOpen] = useState(false)
    const ToggleMobile = () =>{
        setOpen(!isOpen);
        if(document.body.classList.contains('menu_opened')){
            document.body.classList.remove('menu_opened')
            document.body.classList.add('menu_changed')
        }else{
            document.body.classList.add('menu_opened')
        }
    }

    return (
        <header className={WelcomPageToggle ? 'page_header ' : 'page_header welcome_header'} >
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
                            <li><Link to="/">Top</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Search</Link></li>
                            <li><Link to="/">Location</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;