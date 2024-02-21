import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
import Restaurant from './pages/Restaurant';
import RestaurantInner from './pages/RestaurantInner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import { AnimatePresence , motion} from "framer-motion";

function App() {

    const [isFirstMount, setIsFirstMount] = React.useState(true);
    const [WelcomPageToggle, setWelcomPageToggle] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            document.body.style.overflow = 'hidden';
            setWelcomPageToggle(false)
        } else {
            document.body.style.overflow = 'auto';
            setWelcomPageToggle(true)
        }
        setTimeout(() => {
            setIsFirstMount(false);
        }, 3300);

    }, [location.pathname]);

    
    const blackBox = {
        initial: {
            height: "100%",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                when: "afterChildren",
                duration: 1.5,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    const textContainer = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
            },
        },
    };


    const text = {
        initial: {
            y: 40,
        },
        animate: {
            y: 90,
            transition: {
                duration: 1.5,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };
    const InitialTransition = () => {
        React.useState(() => {
            typeof windows !== "undefined" && window.scrollTo(0, 0);
        }, []);

        return (
            <motion.div
                className="initial"
                initial="initial"
                animate="animate"
                variants={blackBox}
                onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                onAnimationComplete={() =>
                    document.body.classList.remove("overflow-hidden")
                }
            >
                <motion.svg variants={textContainer} className="initial_svg">
                    <pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={750}
                        height={850}
                        className="text-white"
                    >
                        <rect className="pathSvgInit" />
                        <motion.rect
                            variants={text}
                            className="pathSvgRect"
                        />
                    </pattern>
                    <text
                        className="textSvg"
                        textAnchor="middle"
                        x="50%"
                        y="50%"
                        style={{ fill: "url(#pattern)" }}
                    >
                        Bonapp
                    </text>
                </motion.svg>
            </motion.div>
        );
    };

    return (
        <>
            <AnimatePresence mode="wait" >
                <div className='page-wrapper'>
                    <Header WelcomPageToggle={WelcomPageToggle} />
                    {isFirstMount && <InitialTransition />}
                    <Routes location={location}>
                        <Route path="/" element={<Welcome isFirstMount={isFirstMount} />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/restaurant/:id" element={<Restaurant />} />
                        <Route path="/restaurantInner/:category/:id" element={<RestaurantInner />} />
                    </Routes>
                    {WelcomPageToggle && <Footer />}
                </div>
            </AnimatePresence>
        </>
    );
}

export default App;
