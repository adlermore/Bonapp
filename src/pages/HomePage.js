
import React from 'react';
import '../assets/scss/HomePage/_homePage.scss';
// import '../assets/scss/RestaurantBlock/_restaurantBlock.scss';
import RestaurantBlock from '../components/RestaurantBlock/RestaurantBlock';
import { motion } from "framer-motion";
import Reservation from '../components/Reservation/Reservation';
import HomeReservationImg from '../assets/img/homeReservation.png';
import categoryImg1 from '../assets/img/categoryImg1.png';
import categoryImg2 from '../assets/img/categoryImg2.png';
import categoryImg3 from '../assets/img/categoryImg3.png';
import categoryImg4 from '../assets/img/categoryImg4.png';
import bannerImg from '../assets/img/baner.png';
import bannerImg2 from '../assets/img/baner2.png';
import restaurantImg1 from '../assets/img/restaurantImg1.png';
import restaurantImg2 from '../assets/img/restaurantImg2.png';
import restaurantImg3 from '../assets/img/restaurantImg3.png';
import restaurantImg4 from '../assets/img/restaurantImg4.png';
import restaurantImg5 from '../assets/img/restaurantImg5.png';
import restaurantImg6 from '../assets/img/restaurantImg6.png';
import restaurantImg7 from '../assets/img/restaurantImg7.png';
import restaurantImg8 from '../assets/img/restaurantImg8.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const popularRestaurants = [
    {
        Id: 0,
        Image: restaurantImg1,
        Name: 'Restaurant Name1',
        Country: 'Yerevan, Saryan str.',
        Rate: 5,
        Category : 'Restaurant'
    },
    {
        Id: 1,
        Image: restaurantImg2,
        Name: 'Caffe Name1',
        Country: 'Sisian, Saryan str.',
        Rate: 3,
        Category : 'Caffe'

    },
    {
        Id: 2,
        Image: restaurantImg3,
        Name: 'Food Name',
        Country: 'Artimed, Saryan str.',
        Rate: 2,
        Category : 'Food'

    },
    {
        Id: 3,
        Image: restaurantImg4,
        Name: 'Bar Name',
        Country: 'Sevan, Saryan str.',
        Rate: 5,
        Category : 'Bar'

    },
    {
        Id: 30,
        Image: restaurantImg5,
        Name: 'Restaurant Name55',
        Country: 'Sevan, Saryan str.',
        Rate: 5,
        Category : 'Restaurant'
    }
]

const NewRestaurants = [
    {
        Id: 4,
        Image: restaurantImg6,
        Name: 'Restaurant Name5',
        Country: 'Yerevan, Saryan str.',
        Rate: 5,
        Category : 'Restaurant'
    },
    {
        Id: 5,
        Image: restaurantImg8,
        Name: 'Caffe Name6',
        Country: 'Sisian, Saryan str.',
        Rate: 4,
        Category : 'Caffe'
    },
    {
        Id: 6,
        Image: restaurantImg7,
        Name: 'Food Name7',
        Country: 'Artimed, Saryan str.',
        Rate: 5,
        Category : 'Food'
    },
    {
        Id: 7,
        Image: restaurantImg5,
        Name: 'Bar Name8',
        Country: 'Sevan, Saryan str.',
        Rate: 5,
        Category : 'Bar'
    }
]

const HomePage = () => {

    const settingsSlider = {
        dots: false,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 1.1,
                    initialSlide: 1.1,
                    slidesToScroll: 1.1,
                }
            }
        ]
    };

    return (
        <motion.div className="home_page" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <Reservation background={HomeReservationImg} />
            <div className='about_section'>
                <div className='custom_container'>
                    <div className='block_title'>About us</div>
                    <div className='block_description'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui blandit
                        praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </div>
                </div>
            </div>
            <div className='category_section'>
                <div className='custom_container'>
                    <div className='category_list'>
                        <a href='/#' className='category_block'>
                            <div className='category_info'>
                                <div className='inner_title'>Armenian</div>
                                <div className='inner_description'>
                                    Armenian cuisine boasts rich flavors and diverse dishes, including dolma,
                                    lavash, and succulent kebabs, reflecting a vibrant culinary heritage.
                                </div>
                            </div>
                            <div className='category_image'>
                                <img src={categoryImg1} alt="innerImage" />
                            </div>
                        </a>
                        <a href='/#' className='category_block'>
                            <div className='category_info'>
                                <div className='inner_title'>Georgian</div>
                                <div className='inner_description'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                                </div>
                            </div>
                            <div className='category_image'>
                                <img src={categoryImg2} alt="innerImage" />
                            </div>
                        </a>
                        <a href='/#' className='category_block'>
                            <div className='category_info'>
                                <div className='inner_title'>Chinese</div>
                                <div className='inner_description'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                                </div>
                            </div>
                            <div className='category_image'>
                                <img src={categoryImg3} alt="innerImage" />
                            </div>
                        </a>
                        <a href='/#' className='category_block'>
                            <div className='category_info'>
                                <div className='inner_title'>Syrian</div>
                                <div className='inner_description'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                                </div>
                            </div>
                            <div className='category_image'>
                                <img src={categoryImg4} alt="innerImage" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='banner_section'>
                <img src={bannerImg} alt="banerImg" />
            </div>
            <div className='popularRes_section'>
                <div className='custom_container'>
                    <div className='block_title'>Popular</div>
                    <div className='restaurants_list'>
                        <Slider {...settingsSlider}>
                            {popularRestaurants.map((restaurant) => (
                                <RestaurantBlock key={restaurant.Id} restaurant={restaurant} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='newRes_section'>
                <div className='custom_container'>
                    <div className='block_title'>Popular</div>
                    <div className='restaurants_list'>
                        <Slider {...settingsSlider}>
                            {NewRestaurants.map((restaurant) => (
                                <RestaurantBlock key={restaurant.Id} restaurant={restaurant} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='banner_section banner_section2'>
                <img src={bannerImg2} alt="banerImg" />
            </div>
            </motion.div>
    )
}

export default HomePage;   