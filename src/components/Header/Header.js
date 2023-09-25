import React from "react";

const Header = ({positionRelative}) => {
    
    return (
        <header className={positionRelative ? 'page_header header_relative' :  'page_header '}>
            <div className="header_inner">
                <div className="header_container">
                    <a href="#/" className="logo_block">Logo</a>
                    <ul className="header_menu">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li> 
                    </ul> 
                </div>
            </div>
        </header>
    )
}

export default Header;