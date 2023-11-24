
import React , { useState, useEffect} from 'react';
import '../assets/scss/HomePage/_homePage.scss'

const Restaurant = () => {

    const [CurrPageName, setCurrPageName] = useState(null);

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        const desiredPart = parts.slice(parts.indexOf("Restaurant") + 1).join("/");
        setCurrPageName(desiredPart)
    },[])

    return (
        <div className="restaurants_page">
            <h1>{CurrPageName}</h1>
            <div className="custom_container">Restaurant</div>
            <div className='regular'>regular </div>
            <div className='bold'> bold</div>
            <div className='light'> light</div>
            <div className='medium'>medium </div>
            <div className='semibold'> semibold</div>
        </div>
    )
}

export default Restaurant;