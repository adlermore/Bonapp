
import React, { useEffect, useRef, useState } from 'react';
import bg1 from '../assets/img/bg1.png';
import bg2 from '../assets/img/bg2.png';
import bg3 from '../assets/img/bg3.png';
import bg4 from '../assets/img/bg4.png';
import userimg1 from '../assets/img/user1.png';
import userimg2 from '../assets/img/user2.png';
import userimg3 from '../assets/img/user3.png';
import menuImg1 from '../assets/img/menu1.png';
import menuImg2 from '../assets/img/menu2.png';
import menuImg3 from '../assets/img/menu3.png';
import Reservation from '../components/Reservation/Reservation';
import restaurantInnerImg1 from '../assets/img/restaurantInner1.png'
import Slider from 'react-slick';
import { setupSdk } from "@matterport/sdk";
import Hamburger from 'hamburger-react';
import MapContainer from '../components/MapContainer/MapContainer';
import '../assets/scss/RestaurantInner/_restaurantsInner.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RestaurantInner = () => {

    const container = useRef(null)
    const [started, setStarted] = useState(false);

    const [restaurantData, setRestaurantData] = useState({
        Id: 1,
        CoverImage: bg1,
        Image: bg1,
        Name: 'Restaurant Example Name',
        Country: 'Street',
        Rate: 5,
        Category: 'Restaurant',
        location: {
            lat: 40.184953,
            lng: 44.509741
        },
    })

    useEffect(() => {
        const path = window.location.href;
        const parts = path.split("/");
        let olddesiredPart = parts.slice(parts.indexOf("restaurantInner") + 1).join("/");
        let desiredPart = olddesiredPart.slice(0, olddesiredPart.indexOf("/"));
        let newPageData = {};

        if (desiredPart === 'Caffe') {
            newPageData = {
                ...restaurantData,
                CoverImage: bg2,
                Category: desiredPart
            };
        } else if (desiredPart === 'Food') {
            newPageData = {
                ...restaurantData,
                CoverImage: bg3,
                Category: desiredPart
            };
        } else if (desiredPart === 'Bar') {
            newPageData = {
                ...restaurantData,
                CoverImage: bg4,
                Category: desiredPart
            };
        }

        if (restaurantData.Category !== desiredPart) {
            setRestaurantData(newPageData);
        }
        if (!started && container.current) {
            setStarted(true);
            setupSdk("fn59adz68mq4gibz8c3at3fsc", {
                container: container.current,
                space: "j4RZx7ZGM6T",
                iframeQueryParams: { qs: 1 }
            })
        }

    }, [restaurantData, started])

    const settingsSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


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
                <button className="gallery_btn">See All</button>
            </div>
            <div className="custom_container">
                <div className="inner_section">
                    <div className="section_title">What clients say</div>
                    <div className="commets_slider">
                        <Slider {...settingsSlider}>
                            <div className="commets_block">
                                <div className="user_img">
                                    <img src={userimg1} alt="userImg" />
                                </div>
                                <div className="userNamer">Username</div>
                                <div className="user_comment">
                                    "What a gem of a restaurant! The food is absolutely delicious,
                                    and the atmosphere is so cozy and inviting. From the moment
                                    we stepped in, we felt at home. I highly recommend trying
                                    their signature dishes, and don't forget to save room for
                                    dessert. It's a little slice of culinary heaven."
                                </div>
                                <div className='rest_rate'>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                </div>
                            </div>
                            <div className="commets_block">
                                <div className="user_img">
                                    <img src={userimg2} alt="userImg" />
                                </div>
                                <div className="userNamer">Username</div>
                                <div className="user_comment">
                                    "What a gem of a restaurant! The food is absolutely delicious,
                                    and the atmosphere is so cozy and inviting. From the moment
                                    we stepped in, we felt at home. I highly recommend trying
                                    their signature dishes, and don't forget to save room for
                                    dessert. It's a little slice of culinary heaven."
                                </div>
                                <div className='rest_rate'>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                </div>
                            </div>
                            <div className="commets_block">
                                <div className="user_img">
                                    <img src={userimg3} alt="userImg" />
                                </div>
                                <div className="userNamer">Username</div>
                                <div className="user_comment">
                                    "What a gem of a restaurant! The food is absolutely delicious,
                                    and the atmosphere is so cozy and inviting. From the moment
                                    we stepped in, we felt at home. I highly recommend trying
                                    their signature dishes, and don't forget to save room for
                                    dessert. It's a little slice of culinary heaven."
                                </div>
                                <div className='rest_rate'>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                </div>
                            </div>
                            <div className="commets_block">
                                <div className="user_img">
                                    <img src={userimg2} alt="userImg" />
                                </div>
                                <div className="userNamer">Username</div>
                                <div className="user_comment">
                                    "What a gem of a restaurant! The food is absolutely delicious,
                                    and the atmosphere is so cozy and inviting. From the moment
                                    we stepped in, we felt at home. I highly recommend trying
                                    their signature dishes, and don't forget to save room for
                                    dessert. It's a little slice of culinary heaven."
                                </div>
                                <div className='rest_rate'>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                </div>
                            </div>
                            <div className="commets_block">
                                <div className="user_img">
                                    <img src={userimg3} alt="userImg" />
                                </div>
                                <div className="userNamer">Username</div>
                                <div className="user_comment">
                                    "What a gem of a restaurant! The food is absolutely delicious,
                                    and the atmosphere is so cozy and inviting. From the moment
                                    we stepped in, we felt at home. I highly recommend trying
                                    their signature dishes, and don't forget to save room for
                                    dessert. It's a little slice of culinary heaven."
                                </div>
                                <div className='rest_rate'>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                </div>
                            </div>
                            <div className="commets_block">
                                <div className="user_img">
                                    <img src={userimg1} alt="userImg" />
                                </div>
                                <div className="userNamer">Username</div>
                                <div className="user_comment">
                                    "What a gem of a restaurant! The food is absolutely delicious,
                                    and the atmosphere is so cozy and inviting. From the moment
                                    we stepped in, we felt at home. I highly recommend trying
                                    their signature dishes, and don't forget to save room for
                                    dessert. It's a little slice of culinary heaven."
                                </div>
                                <div className='rest_rate'>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                    <span className='icon-star'></span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="inner_section">
                    <div className='section_title'>
                        Find your table
                    </div>
                    <div className="section_description">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                        iriure dolor in hendrerit in vulputate
                    </div>
                </div>
                <div className="inner_section">
                    <div className='section_title'>
                        3D Map
                    </div>
                    <div className="Map_container">
                        <div className="container" ref={container}></div>
                    </div>
                </div>
                <div className="inner_section">
                    <div className="section_title">What clients say</div>
                    <div className="section_description">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                        iriure dolor in hendrerit in vulputate
                    </div>
                    <div className="section_menu">
                        <div className="section_list">
                            <a href="/#" className="menu_block">All</a>
                            <a href="/#" className="menu_block">Lunch</a>
                            <a href="/#" className="menu_block">Salad</a>
                            <a href="/#" className="menu_block">Soup</a>
                            <a href="/#" className="menu_block">Fast Food</a>
                        </div>
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
                        <div className="menu_list">
                            <div className="menu_block">
                                <a href="/#" className="image_block">
                                    <img src={menuImg1} alt="MenuImg" />
                                    <a href="/#" className="image_btn icon-eye"> </a>
                                </a>
                                <div className="menu_inner">
                                    <a href="#/" className="card_btn icon-card"> </a>
                                    <div className="menu_price">3000 AMD</div>
                                    <div className="menu_name">Burger, pork meat</div>
                                    <div className="menu_desc">Pork meat, cheese brad, tomato</div>
                                </div>
                            </div>
                            <div className="menu_block">
                                <a href="/#" className="image_block">
                                    <img src={menuImg2} alt="MenuImg" />
                                    <a href="/#" className="image_btn icon-eye"> </a>
                                </a>
                                <div className="menu_inner">
                                    <a href="#/" className="card_btn icon-card"> </a>
                                    <div className="menu_price">2500 AMD</div>
                                    <div className="menu_name">Naget, chicken</div>
                                    <div className="menu_desc">Chicken meat</div>
                                </div>
                            </div>
                            <div className="menu_block">
                                <a href="/#" className="image_block">
                                    <img src={menuImg3} alt="MenuImg" />
                                    <a href="/#" className="image_btn icon-eye"> </a>
                                </a>
                                <div className="menu_inner">
                                    <a href="#/" className="card_btn icon-card"> </a>
                                    <div className="menu_price">1850 AMD</div>
                                    <div className="menu_name">French Fries</div>
                                    <div className="menu_desc">Pork meat, vegitabls</div>
                                </div>
                            </div>
                            <div className="menu_block">
                                <a href="/#" className="image_block">
                                    <img src={menuImg1} alt="MenuImg" />
                                    <a href="/#" className="image_btn icon-eye"> </a>
                                </a>
                                <div className="menu_inner">
                                    <a href="#/" className="card_btn icon-card"> </a>
                                    <div className="menu_price">3000 AMD</div>
                                    <div className="menu_name">Burger, pork meat</div>
                                    <div className="menu_desc">Pork meat, cheese brad, tomato</div>
                                </div>
                            </div>
                            <div className="menu_block">
                                <a href="/#" className="image_block">
                                    <img src={menuImg2} alt="MenuImg" />
                                    <a href="/#" className="image_btn icon-eye"> </a>
                                </a>
                                <div className="menu_inner">
                                    <a href="#/" className="card_btn icon-card"> </a>
                                    <div className="menu_price">2500 AMD</div>
                                    <div className="menu_name">Naget, chicken</div>
                                    <div className="menu_desc">Chicken meat</div>
                                </div>
                            </div>
                            <div className="menu_block">
                                <a href="/#" className="image_block">
                                    <img src={menuImg3} alt="MenuImg" />
                                    <a href="/#" className="image_btn icon-eye"> </a>
                                </a>
                                <div className="menu_inner">
                                    <a href="#/" className="card_btn icon-card"> </a>
                                    <div className="menu_price">1850 AMD</div>
                                    <div className="menu_name">French Fries</div>
                                    <div className="menu_desc">Pork meat, vegitabls</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mapInner_section">
                <MapContainer location={restaurantData} isAdding={true} error={false} />
            </div>
        </div>
    )
}

export default RestaurantInner;