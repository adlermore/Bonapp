
import React, { useEffect, useState } from 'react';
import '../assets/scss/RestaurantInner/_restaurantsInner.scss';
import bg1 from '../assets/img/bg1.png';
import bg2 from '../assets/img/bg2.png';
import bg3 from '../assets/img/bg3.png';
import bg4 from '../assets/img/bg4.png';
import Reservation from '../components/Reservation/Reservation';
import restaurantInnerImg1 from '../assets/img/restaurantInner1.png'

const RestaurantInner = () => {

    const [restaurantData, setRestaurantData] = useState({
        Id: 1,
        CoverImage : bg1,
        Image: bg1 ,
        Name: 'Restaurant Example Name',
        Country: 'Street',
        Rate: 5,
        Category: 'Restaurant',
    })

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        let olddesiredPart = parts.slice(parts.indexOf("restaurantInner") + 1).join("/");
        let desiredPart = olddesiredPart.slice( 0 , olddesiredPart.indexOf("/"));
        let newPageData = {};

        if (desiredPart === 'Caffe') {
            newPageData = {
                ...restaurantData,
                CoverImage: bg2,
                Category : desiredPart
            };
        } else if (desiredPart === 'Food') {
            newPageData = {
                ...restaurantData,
                CoverImage: bg3,
                Category : desiredPart
            };
        } else if (desiredPart === 'Bar') {
            newPageData = {
                ...restaurantData,
                CoverImage: bg4,
                Category : desiredPart
            };
        }

        if (restaurantData.Category !== desiredPart) {
            setRestaurantData(newPageData);
        }

    }, [restaurantData])


    return (
        <div className='restaurantInner'>
            <Reservation 
                background={restaurantData.CoverImage} 
                innerName={restaurantData.Name} 
                innerDescription={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'} 
                isInnerPage={true}
            />
            <div className='inner_cover'>
                <img src={restaurantInnerImg1} alt='coverInner' />
            </div>
        </div>
    )
}

export default RestaurantInner;