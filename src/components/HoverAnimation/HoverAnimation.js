import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/_hoverAnimation.scss'

const HoverAnimation = ({currentColor}) => {
    const navigate = useNavigate();
    
    const homeNavigate=(e)=>{
        e.preventDefault();
        navigate(`/home`)
    }
    return (
        <div className={`gsap_section welcome_btn ${currentColor}`}>
            <div>
                <span className="button--bubble__container" id="component-1">
                    <a href="/#" className="button button--bubble" onClick={(e)=>homeNavigate(e)}>
                        Get Started
                    </a>
                </span>
            </div>
        </div>
    )
}

export default HoverAnimation;