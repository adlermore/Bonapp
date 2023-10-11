import React from "react";
import { Link } from "react-router-dom";
import logoImg from '../../assets/img/logo.png'

const Header = ({positionRelative}) => {
    
    return (
        <header className={positionRelative ? 'page_header header_relative' :  'page_header '}>
            <div className="header_inner">
                <div className="header_container">
                    <Link to="/" className="logo_block"><img src={logoImg} alt="logo-img"/></Link>
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
        </header>
    )
}

export default Header;