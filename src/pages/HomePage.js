
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/HomePage/_homePage.scss'
const HomePage = () => {

    return (
        <div className="home_page">
            <div className="search_section">
                <div className="custom_container">
                    <div className="main_search">
                        <Link to="/">Welcome</Link>
                        <a href="#/">Time</a>
                        <a href="#/">Name</a>
                        asdasdasd
                        <button className="site_btn">Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;