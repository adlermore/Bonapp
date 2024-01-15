
import React, { useState, useEffect } from 'react';
import '../assets/scss/Restaurants/_restaurants.scss';
import RestaurantsCoverImg from '../assets/img/restaurantCoverBg.png';
import CaffesCoverImg from '../assets/img/caffeCoverBg.png';
import FoodsCoverImg from '../assets/img/foodCoverBg.png';
import BarrsCoverImg from '../assets/img/barCoverBg.png';

const Restaurant = () => {

    const [CurrPageData, setCurrPageData] = useState({
        pageBg: RestaurantsCoverImg,
        pageTitle: 'Restaurants',
        pageDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    });

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        let desiredPart = parts.slice(parts.indexOf("Restaurant") + 1).join("/");
        let newPageData = {}; 

        if (desiredPart === 'restaurant') {
            newPageData = {
                ...CurrPageData,
                pageBg: RestaurantsCoverImg,
                pageTitle: desiredPart,
            };
        } else if (desiredPart === 'caffe') {
            newPageData = {
                ...CurrPageData,
                pageBg: CaffesCoverImg,
                pageTitle: desiredPart,
            };
        } else if (desiredPart === 'food') {
            newPageData = {
                ...CurrPageData,
                pageBg: FoodsCoverImg,
                pageTitle: desiredPart,
            };
        } else if (desiredPart === 'bar') {
            newPageData = {
                ...CurrPageData,
                pageBg: BarrsCoverImg,
                pageTitle: desiredPart,
            };
        }

        if (CurrPageData.pageTitle !== desiredPart) {
            setCurrPageData(newPageData);
        }

    }, [CurrPageData])

    return (
        <div className="restaurants_page">
            <div className="cover_background" style={{ backgroundImage: `url(${CurrPageData.pageBg})` }}>
                <div className="custom_container">
                    <div className="restaurants_description">
                        {CurrPageData.pageDescription}
                    </div>
                </div>
            </div>
            <div className="restaurants_section">
                <div className="custom_container">
                    <h1 className='page_title'>{CurrPageData.pageTitle+'s'}</h1>

                </div>
            </div>
        </div>
    )
}

export default Restaurant;