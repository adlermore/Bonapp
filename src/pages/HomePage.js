
import React from 'react';
// import { Link } from 'react-router-dom';
import '../assets/scss/HomePage/_homePage.scss';
import Reservation from '../components/Reservation/Reservation';
import HomeReservationImg from '../assets/img/homeReservation.png';

const HomePage = () => {

    return (
        <div className="home_page">
            <Reservation  background={HomeReservationImg} />
        </div>
    )
}

export default HomePage;