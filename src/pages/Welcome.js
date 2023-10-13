
import React, { useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import '../assets/scss/MainSlider/_mainSlider.scss'

import bg1 from '../assets/img/bg1.png';
import bg2 from '../assets/img/bg2.png';
import bg3 from '../assets/img/bg3.png';
import bg4 from '../assets/img/bg4.png';
import circle1 from '../assets/img/circle2.png';
import circle2 from '../assets/img/circle3.png';
import circle3 from '../assets/img/circle4.png';
import circle4 from '../assets/img/circle1.png';
import decor1 from '../assets/img/decor/decor1.png';
import decor2 from '../assets/img/decor/decor2.png';
import decor3 from '../assets/img/decor/decor3.png';
import decor4 from '../assets/img/decor/decor4.png';

import HoverAnimation from '../components/HoverAnimation/HoverAnimation';

const Welcome = () => {
    const [isLoggedIn, setisLoggedIn] = useState('current1');
    const [currentPageName, setcurrentPageName] = useState(null);
    const [rotate, setRotate] = useState(-59);
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
                    <div className='slide_titile'>About Bonapp</div>
                    <div className="slide_description">
                        Bonapp is a platform that allows users to easily book tables at their favorite restaurants online.
                        Customers can browse restaurant listings, view availability, and make reservations in a few clicks,
                        streamlining the dining experience. It simplifies the process of securing a table, ensuring a
                        convenient and hassle-free dining experience for patrons.
                    </div>
                    <ul className="decor_list">
                        <li><img src={decor1} alt="decorImg" /></li>
                        <li ><img src={decor2} alt="decorImg" /></li>
                        <li ><img src={decor3} alt="decorImg" /></li>
                        <li ><img src={decor4} alt="decorImg" /></li>
                    </ul>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle1} alt='circle-img' />
                    </animated.div>
                </div>
                <div className={isLoggedIn === 'current2' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg2}) no-repeat center` }}>
                    <div className="slide_description">
                        Text artificial flavors, in juices, nectars, fruit drinks, and compotes.
                        Product manufacturing is strict accordance with GOST, without the addition of
                        Product manufacturing is strict accordance
                        Product manufacturing is strict accordance pr which is
                        essential for proper and healthy nutrition.
                    </div>
                    <ul className="decor_list position-top">
                        <li ><img src={decor1} alt="decorImg" /></li>
                        <li ><img src={decor2} alt="decorImg" /></li>
                        <li ><img src={decor3} alt="decorImg" /></li>
                        <li ><img src={decor4} alt="decorImg" /></li>
                    </ul>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle2} alt='circle-img' />
                    </animated.div>
                </div>
                <div className={isLoggedIn === 'current3' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg3}) no-repeat center` }}>
                    <div className="slide_description">
                        ithout the addition of pr which is
                        essential for proper and healthy nutrition.
                    </div>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle3} alt='circle-img' />
                    </animated.div>
                </div>
                <div className={isLoggedIn === 'current4' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg4}) no-repeat center` }}>
                    <div className="slide_description">
                        Text artificial flavors, in juices, nectars, fruit drinks, and compotes.
                        Product manufacturing is strict accordance with GOST, without the addition of pr which is
                        essential for proper and healthy nutrition.
                    </div>
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
                        enable-background="new 0 0 500 500"
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
                                onClick={() => mainSliderRotate('restaurant', 1, -59)}>
                                Restaurant
                            </textPath>
                            <textPath
                                xlinkHref="#blue"
                                startOffset="30.2%"
                                className={isLoggedIn === 'current2' ? 'text active' : 'text'}
                                onClick={() => mainSliderRotate('caffe', 2, -24)}>
                                Cafe
                            </textPath>
                            <textPath
                                xlinkHref="#blue"
                                startOffset="45%"
                                className={isLoggedIn === 'current3' ? 'text active' : 'text'}
                                onClick={() => mainSliderRotate('lunchBar', 3, 27)}>
                                Bar
                            </textPath>
                            <textPath
                                xlinkHref="#blue"
                                startOffset="54%"
                                className={isLoggedIn === 'current4' ? 'text active' : 'text'}
                                onClick={() => mainSliderRotate('food', 4, 60)}>
                                Food
                            </textPath>
                        </text>
                    </svg>
                </div>


                {/* <div className='navigation_buttons'>
                    <button className={isLoggedIn === 'current1' ? 'navigate-1 active' : 'navigate-1'} onClick={() => mainSliderRotate('restaurant', 1, -59)}>
                        <span>R</span>
                        <span>E</span>
                        <span>S</span>
                        <span>T</span>
                        <span>A</span>
                        <span>U</span>
                        <span>R</span>
                        <span>A</span>
                        <span>N</span>
                        <span>T</span>
                    </button>
                    <button className={isLoggedIn === 'current2' ? 'navigate-2 active' : 'navigate-2'} onClick={() => mainSliderRotate('caffe', 2, -24)}>
                        <span>C</span>
                        <span>A</span>
                        <span>F</span>
                        <span>F</span>
                        <span>E</span>
                    </button>
                    <button className={isLoggedIn === 'current3' ? 'navigate-3 active' : 'navigate-3'} onClick={() => mainSliderRotate('lunchBar', 3, 27)}>
                        <span>B</span>
                        <span>A</span>
                        <span>R</span>
                    </button>
                    <button className={isLoggedIn === 'current4' ? 'navigate-4 active' : 'navigate-4'} onClick={() => mainSliderRotate('food', 4, 60)}>
                        <span>F</span>
                        <span>O</span>
                        <span>O</span>
                        <span>D</span>
                    </button>
                </div> */}
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
            <HoverAnimation className=' welcome_btn' />
        </div>
    )
}

export default memo(Welcome);