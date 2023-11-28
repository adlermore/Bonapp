
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TimeKeeper from 'react-timekeeper';
import '../assets/scss/HomePage/_homePage.scss';

const HomePage = () => {
    
    const [time, setTime] = useState('12:34pm')
    const [showTime, setShowTime] = useState(true)

    return (
        <div className="home_page">
            <div className="search_section">
                <div className="custom_container">
                    <div className="main_search">
                        <Link to="/">Welcome</Link>
                        <a href="#/">Time</a>
                        <a href="#/">Name</a>
                        <div>
                            {showTime &&
                                <TimeKeeper
                                    time={time}
                                    onChange={(newTime) => setTime(newTime.formatted12)}
                                    onDoneClick={() => setShowTime(false)}
                                    switchToMinuteOnHourSelect
                                />
                            }
                            <span>Time is {time}</span>
                            {!showTime &&
                                <button onClick={() => setShowTime(true)}>Show</button>
                            }
                        </div>
                        <button className="site_btn">Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;