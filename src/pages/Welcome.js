
import React, { useState, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import '../assets/scss/MainSlider/_mainSlider.scss'

import bg1 from '../assets/img/bg1.jpg';
import bg2 from '../assets/img/bg2.jpg';
import bg3 from '../assets/img/bg3.jpg';
import bg4 from '../assets/img/bg4.png';
import circle1 from '../assets/img/circle1.png';
import circle2 from '../assets/img/circle3.png';
import circle3 from '../assets/img/circle4.png';
import circle4 from '../assets/img/circle2.png';
import decor1 from '../assets/img/decor/decor1.png';
import decor2 from '../assets/img/decor/decor2.png';
import decor3 from '../assets/img/decor/decor3.png';
import decor4 from '../assets/img/decor/decor4.png';
import decor5 from '../assets/img/decor/decor5.png';
import decor6 from '../assets/img/decor/decor6.png';
import decor7 from '../assets/img/decor/decor7.png';
import decor8 from '../assets/img/decor/decor8.png';
// import restaurantImg from '../assets/img/icon/restaurantDecor.png';


const Welcome = () => {
    const [isLoggedIn, setisLoggedIn] = useState('current1');
    const [currentPageName, setcurrentPageName] = useState(null);
    const [rotate, setRotate] = useState(-54);
    const [SliderCurrent, setSliderCurrent] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();


    

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    let mainSliderRotate = (pageCurrName, num, rotateNum) => {
        setcurrentPageName(pageCurrName);
        if (rotateNum !== rotate) {
            setRotate(rotateNum);
            setSliderCurrent(num)
        }else{
            navigate(`/${pageCurrName}`)
        }
    }

    let CurrentPageHref = (e)=>{
        e.preventDefault()
        navigate(`/${currentPageName}`)
    }

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
            },100);
        }
    });
    
    return (
        <div className="welcome_page">
            <div className={isHovered ? 'slide_list currentHovered' : 'slide_list' }>
                <div className={isLoggedIn === 'current1' ? 'each-slide current_slider' : 'each-slide'} style={{ background: `url(${bg1}) no-repeat center` }}>
                    <div className="slide_description">
                        With the help of innovative technologies, we maintain the maximum taste and useful nutrients of fruits,
                        berries, and vegetables in juices, nectars, fruit drinks, and compotes. Product manufacturing is in
                        strict accordance with GOST, without the addition of preservatives, GMOs, artificial flavors,
                        and colorings, which is essential for proper and healthy nutrition.
                    </div>
                    <ul className="decor_list">
                        <li className='rotate'><img src={decor1} alt="decorImg" /></li>
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
                        <li className='movingRv'><img src={decor5} alt="decorImg" /></li>
                        <li ><img src={decor6} alt="decorImg" /></li>
                        <li><img src={decor7} alt="decorImg" /></li>
                        <li className='rotate'><img src={decor8} alt="decorImg" /></li>
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
                <div className='navigation_buttons'>
                    <button className={isLoggedIn==='current1' ? 'navigate-1 active' : 'navigate-1'}  onClick={(evt) => mainSliderRotate('caffe', 1, -54)}>
                        <span>C</span>
                        <span>A</span>
                        <span>F</span>
                        <span>F</span>
                        <span>E</span>
                    </button>
                    <button className={isLoggedIn==='current2' ? 'navigate-2 active' : 'navigate-2'} onClick={(evt) => mainSliderRotate('restaurant', 2, -22)}>
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
                        {/* <img src={restaurantImg} alt="img" /> */}
                    </button>
                    <button className={isLoggedIn==='current3' ? 'navigate-3 active' : 'navigate-3'} onClick={(evt) => mainSliderRotate('food', 3, 23)}>
                        <span>F</span>
                        <span>O</span>
                        <span>O</span>
                        <span>D</span>
                    </button>
                    <button className={isLoggedIn==='current4' ? 'navigate-4 active' : 'navigate-4'} onClick={(evt) => mainSliderRotate('lunchBar', 4, 55)}>
                        <span>L</span>
                        <span>U</span>
                        <span>N</span>
                        <span>C</span>
                        <span>H</span>
                        <span>-</span>
                        <span>B</span>
                        <span>A</span>
                        <span>R</span>
                    </button>
                </div>
            </div>
            <animated.div className="progress_nav" style={{ transform }}>
                <span className='active-circle'></span>
            </animated.div>
            <div className="decor_line">
                <a href='#/' 
                    onClick={(e)=>CurrentPageHref(e)} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='current_page_href'>
                    Current Link
                </a>
            </div>
            <Link to="/home" className='site_btn welcome_btn'>Get Started {window.innerHeight}</Link>
        </div>
    )
}

export default memo(Welcome);