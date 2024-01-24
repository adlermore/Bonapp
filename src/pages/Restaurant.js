
import React, { useState, useEffect } from 'react';
import RestaurantsCoverImg from '../assets/img/restaurantCoverBg.png';
import CaffesCoverImg from '../assets/img/caffeCoverBg.png';
import FoodsCoverImg from '../assets/img/foodCoverBg.png';
import BarrsCoverImg from '../assets/img/barCoverBg.png';
import { Squash as Hamburger } from 'hamburger-react'
import restaurant1 from '../assets/img/restaurantImg1.png';
import restaurant2 from '../assets/img/restaurantImg2.png';
import restaurant3 from '../assets/img/restaurantImg3.png';
import restaurant4 from '../assets/img/restaurantImg4.png';
import restaurant5 from '../assets/img/restaurantImg5.png';
import restaurant6 from '../assets/img/restaurantImg6.png';
import restaurant7 from '../assets/img/restaurantImg7.png';
import restaurant8 from '../assets/img/restaurantImg8.png';
import RestaurantBlock from '../components/RestaurantBlock/RestaurantBlock';
import '../assets/scss/Restaurants/_restaurants.scss';
import MapContainer from '../components/MapContainer/MapContainer';
import { motion } from "framer-motion";
// import '../assets/scss/RestaurantBlock/_restaurantBlock.scss';

const Restaurant = () => {

    const NewRestaurants = [
        {
            Id: 4,
            Image: restaurant1,
            Name: 'Restaurant Name5',
            Country: 'Yerevan, Saryan str.',
            Rate: 5,
            Category: 'Restaurant',
            location: {
                lat: 40.184953,
                
                lng: 44.509741
            },
        },
        {
            Id: 5,
            Image: restaurant2,
            Name: 'Caffe Name6',
            Country: 'Sisian, Saryan str.',
            Rate: 4,
            Category: 'Caffe',
            location: {
                lat: 40.182529,
                lng: 44.513487
            },
        },
        {
            Id: 6,
            Image: restaurant3,
            Name: 'Bar Name7',
            Country: 'Artimed, Saryan str.',
            Rate: 5,
            Category: 'Bar',
            location: {
                lat: 40.184764,
                lng: 40.184764
            },
        },
        {
            Id: 7,
            Image: restaurant4,
            Name: 'Caffe Name8',
            Country: 'Sevan, Saryan str.',
            Rate: 5,
            Category: 'Caffe',
            location: {
                lat: 40.178551,
                lng: 44.507709
            },
        },
        {
            Id: 8,
            Image: restaurant5,
            Name: 'Food Name8',
            Country: 'Sevan, Saryan str.',
            Rate: 4,
            Category: 'Food',
            location: {
                lat: 40.186901,
                lng: 44.532378
            },
        },
        {
            Id: 77,
            Image: restaurant6,
            Name: 'Restaurant Name8',
            Country: 'Sevan, Saryan str.',
            Rate: 5,
            Category: 'Caffe',
            location: {
                lat: 40.176576,
                lng: 44.519819
            },
        },
        {
            Id: 9,
            Image: restaurant7,
            Name: 'Food Name8',
            Country: 'Sevan, Saryan str.',
            Rate: 5,
            Category: 'Food',
        },
        {
            Id: 10,
            Image: restaurant8,
            Name: 'Bar Name8',
            Country: 'Sevan, Saryan str.',
            Rate: 5,
            Category: 'Bar',
        }
    ];

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
        <motion.div className="restaurants_page" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <div className="cover_background" style={{ backgroundImage: `url(${CurrPageData.pageBg})` }}>
                <div className="custom_container">
                    <div className="restaurants_description">
                        {CurrPageData.pageDescription}
                    </div>
                </div>
            </div>
            <div className="restaurants_section">
                <div className="custom_container">
                    <h1 className='page_title'>{CurrPageData.pageTitle + 's'}</h1>
                    <div className="filter_container">
                        <div className="filter_block">
                            <div className="fileter_btn">
                                <Hamburger size={32} color="#3C3C3C" distance="md" />
                                <span>Filter</span>
                            </div>
                        </div>
                        <div className="search_block">
                            <input type="text" placeholder='Restaurant name, Food name' />
                        </div>
                        <div className='search_btn'>
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="restaurants_list">
                        {NewRestaurants.map((restaurant) => (
                            <RestaurantBlock key={restaurant.Id} restaurant={restaurant} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="map_section">
                <MapContainer array={NewRestaurants} isAdding={true} error={false} />
            </div>
        </motion.div>
    )
}

export default Restaurant;