
import React, { useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import '../assets/scss/MainSlider/_mainSlider.scss'
import HoverAnimation from '../components/HoverAnimation/HoverAnimation';

import bg1 from '../assets/img/bg1.png';
import bg2 from '../assets/img/bg2.png';
import bg3 from '../assets/img/bg3.png';
import bg4 from '../assets/img/bg4.png';
import circle1 from '../assets/img/circle1.png';
import circle2 from '../assets/img/circle2.png';
import circle3 from '../assets/img/circle3.png';
import circle4 from '../assets/img/circle4.png';
import rest1 from '../assets/img/decor/rest1.png';
import rest2 from '../assets/img/decor/rest2.png';
import rest3 from '../assets/img/decor/rest3.png';
import rest4 from '../assets/img/decor/rest4.png';
import rest5 from '../assets/img/decor/rest5.png';
import rest6 from '../assets/img/decor/rest6.png';
import rest7 from '../assets/img/decor/rest7.png';
import bar1 from '../assets/img/decor/bar1.png';
import bar2 from '../assets/img/decor/bar2.png';
import bar3 from '../assets/img/decor/bar3.png';
import bar4 from '../assets/img/decor/bar4.png';
import bar5 from '../assets/img/decor/bar5.png';
import food1 from '../assets/img/decor/food1.png';
import food2 from '../assets/img/decor/food2.png';
import food3 from '../assets/img/decor/food3.png';
import food4 from '../assets/img/decor/food4.png';
import food5 from '../assets/img/decor/food5.png';
import food6 from '../assets/img/decor/food6.png';
import cafe1 from '../assets/img/decor/cafe1.png';
import cafe2 from '../assets/img/decor/cafe2.png';
import cafe3 from '../assets/img/decor/cafe3.png';
import cafe4 from '../assets/img/decor/cafe4.png';
import cafe5 from '../assets/img/decor/cafe5.png';
import cafe6 from '../assets/img/decor/cafe6.png';
import cafe7 from '../assets/img/decor/cafe7.png';
import cafe8 from '../assets/img/decor/cafe8.png';

const restDecors = [rest1 , rest2 , rest3 , rest4 , rest5 , rest6, rest7];
const cafeDecors = [cafe1 , cafe2 , cafe1 , cafe3 , cafe4 , cafe5, cafe1, cafe6 , cafe7 , cafe1 , cafe8];
const foodDecors = [food1 , food2 , food3 , food4 , food5 , food2, food6, food3];
const barDecors = [bar1 , bar2 , bar3 , bar4 , bar5 , bar2];

const Welcome = () => {
    const [isLoggedIn, setisLoggedIn] = useState('current1');
    const [currentPageName, setcurrentPageName] = useState(null);
    const [rotate, setRotate] = useState(-60);
    const [SliderCurrent, setSliderCurrent] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const mainSliderRotate = useCallback((pageCurrName, num, rotateNum) => {
        setcurrentPageName(pageCurrName);
        if (rotateNum !== rotate) {
            setRotate(rotateNum);
            setSliderCurrent(num)
        } else {
            navigate(`/${pageCurrName}`)
        }
    }, [navigate, rotate])

    const CurrentPageHref = useCallback((e) => {
        e.preventDefault()
        navigate(`/${currentPageName}`)
    }, [currentPageName, navigate])

    const { transform } = useSpring({
        transform: `translate(-50%, 0%) rotate(${rotate}deg)`,
        config: {
            mass: 15,
            tension: 600,
            precision: 0.5,
            velocity: -0.01
        }, onRest: () => {
            setTimeout(() => {
                setisLoggedIn('current' + SliderCurrent)
            }, 100);
        }
    });

    console.log('render');
    return (
        <div className="welcome_page">
            <div className={isHovered ? 'slide_list currentHovered' : 'slide_list'}>
                <div className={isLoggedIn === 'current1' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg1}) no-repeat center` }}>
                    <ul className="decor_list restaurant_list">
                        {restDecors.map((decor , index)=>{
                            return <li key={index} className='decor_li'><img src={decor} alt='decor-elem' /></li>
                        })}
                    </ul>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle1} alt='circle-img' />
                    </animated.div>
                </div>
                <div className={isLoggedIn === 'current2' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg2}) no-repeat center` }}>
                    <ul className="decor_list cafe_list">
                        {cafeDecors.map((decor , index)=>{
                            return <li key={index} className='decor_li'><img src={decor} alt='decor-elem' /></li>
                        })}
                    </ul>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle2} alt='circle-img' />
                    </animated.div>
                </div>
                <div className={isLoggedIn === 'current3' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg3}) no-repeat center` }}>
                    <ul className="decor_list food_list">
                        {foodDecors.map((decor , index)=>{
                            return <li key={index} className='decor_li'><img src={decor} alt='decor-elem' /></li>
                        })}
                    </ul>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle3} alt='circle-img' />
                    </animated.div>
                </div>
                <div className={isLoggedIn === 'current4' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg4}) no-repeat center` }}>
                    <ul className="decor_list bar_list">
                        {barDecors.map((decor , index)=>{
                            return <li key={index} className='decor_li'><img src={decor} alt='decor-elem' /></li>
                        })}
                    </ul>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle4} alt='circle-img' />
                    </animated.div>
                </div>
            </div>
            <div className="navigation_circle">
                <div className="nav_circle_line">
                    <svg
                        version="1.1" id="Layer_1" 
                        viewBox="0 0 500 500" 
                        enableBackground="new 0 0 500 500"
                    >
                        <path
                            fill="none"
                            strokeOpacity="0.1"
                            id="blue"
                            strokeMiterlimit="10"
                            d="M114.16 382.84A189.38 189.38 0 0 1 60 250c0-104.94 85.06-190 190-190 104.93 0 190 85.06 190 190 0 104.93-85.07 190-190 190-45.35 0-87-15.9-119.66-42.4"
                        />
                        <text>
                            <textPath
                                xlinkHref="#blue"
                                startOffset="18.5%"
                                className={isLoggedIn === 'current1' ? 'text active' : 'text'}
                                onClick={() => mainSliderRotate('restaurant', 1, -60)}>
                                Restaurant
                            </textPath>
                            <textPath
                                xlinkHref="#blue"
                                startOffset="29.8%"
                                className={isLoggedIn === 'current2' ? 'text active' : 'text'}
                                onClick={() => mainSliderRotate('caffe', 2, -25)}>
                                Cafe
                            </textPath>
                            <textPath
                                xlinkHref="#blue"
                                startOffset="44%"
                                className={isLoggedIn === 'current3' ? 'text active' : 'text'}
                                onClick={() => mainSliderRotate('food', 3, 25)}>
                                Food
                            </textPath>
                            <textPath
                                xlinkHref="#blue"
                                startOffset="54.3%"
                                className={isLoggedIn === 'current4' ? 'text active' : 'text'}
                                onClick={() => mainSliderRotate('bar', 4, 60)}>
                                Bar
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
            <animated.div className="progress_nav" style={{ transform }}>
                <span className='active-circle'></span>
            </animated.div>
            <div className="decor_line">
                <a href='#/'
                    onClick={(e) => CurrentPageHref(e)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='current_page_href'>
                    Current Link
                </a>
            </div>
            <div className="welcome_info">
                    <div className='slide_titile'>About Bonapp</div>
                    <div className="slide_description">
                        Bonapp is a platform that allows users to easily book tables at their favorite restaurants online.
                        Customers can browse restaurant listings, view availability, and make reservations in a few clicks,
                        streamlining the dining experience. It simplifies the process of securing a table, ensuring a
                        convenient and hassle-free dining experience for patrons.
                    </div>    
                    <HoverAnimation currentColor={isLoggedIn} />
            </div>
        </div>
    )
}

export default memo(Welcome);