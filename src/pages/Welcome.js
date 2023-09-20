
import React, { useState, useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
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
import { useSpring, animated } from 'react-spring';


const Welcome = () => {
    const [rotate, setRotate] = useState(-54);
    const [SliderArr, setSliderArr] = useState();

    const slideList = useRef();
    const progress = useRef();

    useEffect(() => {
        setSliderArr(slideList.current.children)
    }, [])

    let mainSliderRotate = (num, rotateNum) => {
        if (rotateNum !== rotate) {
            setRotate(rotateNum);
            let SliderNewArr = [].slice.call(SliderArr);
            setTimeout(() => {
                SliderNewArr.forEach(element => {
                    element.classList.remove('current_slider')
                    return element
                });
                requestAnimationFrame(() => {
                    SliderArr[num - 1].classList.add('current_slider');
                });
            }, 500);
        }
    }

    const { transform } = useSpring({
        transform: `translate(-50%, 0%) rotate(${rotate}deg)`,
        config: {
            mass: 15,
            tension: 600,
            precision: 0.5,
            velocity: -0.01
        },
    });

    return (
     
        <div className="welcome_page">
            <div className='slide_list' ref={slideList}>
                <animated.div className="each-slide current_slider" style={{ background: `url(${bg1}) no-repeat center` }}>
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
                </animated.div>
                <animated.div className="each-slide" style={{ background: `url(${bg2}) no-repeat center` }}>
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
                </animated.div>
                <animated.div className="each-slide" style={{ background: `url(${bg3}) no-repeat center` }}>
                    <div className="slide_description">
                        ithout the addition of pr which is
                        essential for proper and healthy nutrition.
                    </div>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle3} alt='circle-img' />
                    </animated.div>
                </animated.div>
                <animated.div className="each-slide" style={{ background: `url(${bg4}) no-repeat center` }}>
                    <div className="slide_description">
                        Text artificial flavors, in juices, nectars, fruit drinks, and compotes.
                        Product manufacturing is strict accordance with GOST, without the addition of pr which is
                        essential for proper and healthy nutrition.
                    </div>
                    <animated.div className="circle_images" style={{ transform }}>
                        <img src={circle4} alt='circle-img' />
                    </animated.div>
                </animated.div>
            </div>

            <div className="navigation_circle">
                <div className='navigation_buttons'>
                    <button className='navigate-1' onClick={() => mainSliderRotate(1, -54)}>
                        <span>C</span>
                        <span>A</span>
                        <span>F</span>
                        <span>F</span>
                        <span>E</span>
                    </button>
                    <button className='navigate-2' onClick={() => mainSliderRotate(2, -22)}>
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
                    <button className='navigate-3' onClick={() => mainSliderRotate(3, 23)}>
                        <span>F</span>
                        <span>O</span>
                        <span>O</span>
                        <span>D</span>
                    </button>
                    <button className='navigate-4' onClick={() => mainSliderRotate(4, 55)}>
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
            <animated.div className="progress_nav" ref={progress} style={{ transform }}>
                <span className='active-circle'></span>
            </animated.div>
            <div className="decor_line"></div>
            <Link to="/home" className='site_btn welcome_btn'>Get Started</Link>
        </div>
    )
}

export default memo(Welcome);