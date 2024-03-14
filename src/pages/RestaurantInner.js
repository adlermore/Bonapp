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
import tableImg from '../assets/img/tableImg.png';
import Reservation from '../components/Reservation/Reservation';
import CoverImage1 from '../assets/img/RestaurantInnerbaner1.png';
import CoverImage2 from '../assets/img/RestaurantInnerbaner2.png';
import restaurantSlider1 from '../assets/img/restaurantSlider1.png';
import restaurantSlider2 from '../assets/img/restaurantSlider2.png';
import restaurantSlider3 from '../assets/img/restaurantSlider3.png';
import restaurantSlider4 from '../assets/img/restaurantSlider4.png';
import restaurantSlider5 from '../assets/img/restaurantSlider5.png';
import Slider from 'react-slick';
import { setupSdk } from "@matterport/sdk";
// import Hamburger from 'hamburger-react';
import MapContainer from '../components/MapContainer/MapContainer';
import '../assets/scss/RestaurantInner/_restaurantsInner.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Scrollbar } from 'react-scrollbars-custom';

const RestaurantInner = () => {

    const container = useRef(null)
    const [started, setStarted] = useState(false);
    const [playStart, setPlayStart] = useState(false);
    const [reservePopup, setreservePopup] = useState(false);
    const [galleryPopup, setGalleryPopup] = useState(false);

    const [restaurantData, setRestaurantData] = useState({
        Id: 1,
        CoverImage: bg1,
        Image: bg1,
        Name: 'Restaurant Example Name',
        Country: 'Street',
        Rate: 5,
        Category: 'Restaurant',
    })

    const currentLocation = [
        {
            Id: 1,
            Image: menuImg3,
            Name: 'Restaurant Example Name',
            Country: 'Street',
            Rate: 5,
            Category: 'Restaurant',
            location: {
                lat: 40.184953,
                lng: 44.509741
            },
        }
    ]

    const { register, handleSubmit, formState: { errors } } = useForm({
        shouldFocusError: false,
    });

    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;
            const delegate = props.delegate || "[data-fancybox]";
            const options = props.options || {};
            NativeFancybox.bind(container, delegate, options);
            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }

    const onSubmit = () => {
        console.log('success !');
    };

    useEffect(() => {
        const element = document.getElementById('header');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

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
                    slidesToScroll: 2,
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

    const settingsMainSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsGallerySlider = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    }

    const reserveOpened = () => {
        setreservePopup(true);
        document.body.style.overflow = 'hidden';
    }

    const reserveClose = (e) => {
        e.preventDefault();
        setreservePopup(false);
        document.body.style.overflow = 'auto';

    }

    const mapinitPlay = (e) => {
        e.preventDefault();
        setPlayStart(true)
    }
    const galleryPopupOpen = ()=>{
        setGalleryPopup(true);
        document.getElementById('wrapper').classList.add('scrollbarWidth');
        document.getElementById('header').classList.add('scrollbarWidth');
        document.body.style.overflow = 'hidden';
    }
    const galleryPopupClose = (e)=>{
        e.preventDefault();
        setGalleryPopup(false);
        document.getElementById('wrapper').classList.remove('scrollbarWidth');
        document.getElementById('header').classList.remove('scrollbarWidth');
        document.body.style.overflow = 'auto';
    }

    return (
        <motion.div className="restaurantInner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <Reservation
                background={restaurantData.CoverImage}
                innerName={restaurantData.Name}
                innerDescription={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}
                isInnerPage={true}
            />
            <div className='inner_cover'>
                <Slider {...settingsMainSlider}>
                    <div className='slider_container'>
                        <img src={CoverImage1} alt='CoverImg' />
                    </div>
                    <div className='slider_container'>
                        <img src={CoverImage2} alt='CoverImg' />
                    </div>
                </Slider>
            </div>
            <div className="custom_container">
                <div className="inner_section">
                    <div className="section_description">
                        "Welcome to our 'Find Your Table' page! Experience the convenience of selecting
                        your perfect dining spot with Bonapp's innovative 3D map feature. Explore our
                        restaurant layout, visualize each table's location, and choose your favorite
                        spot with ease. Whether you prefer a cozy corner or a table with a view, Bonapp
                        empowers you to customize your dining experience like never before. Let's find
                        your perfect table and make your reservation today!"
                    </div>
                </div>
                <div className="inner_section">
                    <div className='section_title'>
                        3D Map
                    </div>
                    <div className="Map_container">
                        <div className="container" ref={container}> </div>
                        <div className={playStart ? 'preload_wrapper ' : 'active preload_wrapper'}>
                            <a href="/#" className='icon-play play_btn'
                                onClick={e => mapinitPlay(e)}
                            > </a>
                        </div>
                    </div>
                    <button onClick={galleryPopupOpen} className='site_btn transparent_btn'>Photo Gallery</button>
                    <div className={galleryPopup ? 'gallery_popup opened' : 'gallery_popup'}>
                        <div className='gallery_header'>
                            <div className='custom_container'>
                                <div className='rest_name'>Restaurant Name</div>
                                <a href='/#' onClick={e=>galleryPopupClose(e)} className='gallery_close icon-close'> </a>
                            </div>
                        </div>
                        <div className='gallery_container'>
                            <Scrollbar style={{ width: 'auto', height: 'auto' }}>
                            <Fancybox>
                                <div className='custom_container'>
                                    <div className='gallery_label'>Restaurant photos</div>
                                    <ul className="gallery_list">
                                        <li href={restaurantSlider1} data-fancybox="gallery">
                                            <img src={restaurantSlider1} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider2} data-fancybox="gallery">
                                            <img src={restaurantSlider2} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider3} data-fancybox="gallery">
                                            <img src={restaurantSlider3} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider4} data-fancybox="gallery">
                                            <img src={restaurantSlider4} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider5} data-fancybox="gallery">
                                            <img src={restaurantSlider5} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider1} data-fancybox="gallery">
                                            <img src={restaurantSlider1} alt="gallery-img" />
                                        </li>
                                        <li href={CoverImage1} data-fancybox="gallery">
                                            <img src={CoverImage1} alt="gallery-img" />
                                        </li>
                                        <li href={CoverImage2} data-fancybox="gallery">
                                            <img src={CoverImage2} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider5} data-fancybox="gallery">
                                            <img src={restaurantSlider5} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider1} data-fancybox="gallery">
                                            <img src={restaurantSlider1} alt="gallery-img" />
                                        </li>
                                        <li href={restaurantSlider4} data-fancybox="gallery">
                                            <img src={restaurantSlider4} alt="gallery-img" />
                                        </li>
                                        <li href={menuImg1} data-fancybox="gallery">
                                            <img src={menuImg1} alt="gallery-img" />
                                        </li>
                                        <li href={menuImg2} data-fancybox="gallery">
                                            <img src={menuImg2} alt="gallery-img" />
                                        </li>
                                        <li href={menuImg3} data-fancybox="gallery">
                                            <img src={menuImg3} alt="gallery-img" />
                                        </li>
                                    </ul>
                                </div>

                            </Fancybox>
                            </Scrollbar>
                        </div>
                    </div>
                    <div className='gallery_slider'>
                        <Slider {...settingsGallerySlider}>
                            <div className='slider_image'>
                                <img src={restaurantSlider1} alt='CoverImg' />
                            </div>
                            <div className='slider_image'>
                                <img src={restaurantSlider2} alt='CoverImg' />
                            </div>
                            <div className='slider_image'>
                                <img src={restaurantSlider3} alt='CoverImg' />
                            </div>
                            <div className='slider_image'>
                                <img src={restaurantSlider4} alt='CoverImg' />
                            </div>
                            <div className='slider_image'>
                                <img src={restaurantSlider5} alt='CoverImg' />
                            </div>
                        </Slider>
                    </div>
                </div>
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
                    <div className="section_title">Choose your menu</div>
                    <div className="section_description">
                        "Discover Delicious! Dive into our menu filled with irresistible dishes, from starters to desserts, each made with love and the freshest ingredients. Let your taste buds guide you through a culinary adventure at Delicious!"
                    </div>
                    <div className='site_btn transparent_btn'>See full maneu</div>

                    <div className="section_menu">
                        {/* <div className="section_list">
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
                        </div> */}
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
            <button type='button' className="site_btn reservepopup" onClick={() => reserveOpened()}>Reserve</button>
            <div className="mapInner_section">
                <MapContainer array={currentLocation} isAdding={true} error={false} />
            </div>
            <div className='contacts_section'>
                <div className='custom_container'>
                    <div className="contacts_form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={errors?.user_name?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                <div className='block_label'>Name</div>
                                <input placeholder="First Name*" className="form-control" name="user_name" {...register("user_name", { required: true })} />
                                <p className="error-info" >This field is required</p>
                            </div>
                            <div className={errors?.user_surname?.type === "required" ? "form-block has-error" : "form-block"}  >
                                <div className='block_label'>Surname</div>
                                <input placeholder="Last Name*" className="form-control" name="user_surname" {...register("user_surname", { required: true })} />
                                <p className="error-info" >This field is required</p>
                            </div>
                            <div className={errors?.user_email?.type === "required" || errors?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >
                                <div className='block_label'>Mail</div>
                                <input placeholder="Email" className="form-control" name="user_email" {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                                {errors?.user_email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                    <p className="error-info" >This field is required</p>}
                            </div>
                            <div className={errors?.phone_number?.type === "required" ? "form-block has-error" : "form-block"}  >
                                <div className='block_label'>Phone Number</div>
                                <input type="number" placeholder="Phone Number" className="form-control" name="phone_number" {...register("phone_number", { required: true })} />
                                <p className="error-info" >This field is required</p>
                            </div>
                            <div className={errors?.comment?.type === "required" ? "form-block commet_block has-error" : " commet_block form-block"}  >
                                <div className='block_label'>Leave Your Opinion Here</div>
                                <textarea placeholder="Leave Your Opinion Here" className="form-control" name="comment" {...register("comment", { required: true })} />
                                <p className="error-info" >This field is required</p>
                            </div>
                            <div className={errors.rate ? 'rating_line has-error' : 'rating_line'}>
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" value="5" {...register("rate", { required: true })} />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" {...register("rate", { required: true })} />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" {...register("rate", { required: true })} />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" {...register("rate", { required: true })} />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" {...register("rate", { required: true })} />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                <p className="error-info">Please select a rating</p>
                                <button type='submit' className="site_btn send-btn">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div className={reservePopup ? ' login_opened popup_container' : 'popup_container'}>
                <div className="login_popup popup">
                    <div className="popup_inner">
                        <div className="popup_container">
                            <a href="/#" className="popup_close icon_close" onClick={(e) => reserveClose(e)}>X</a>
                            <div className='table_block'>
                                <div className='table_title'>Choose your tables</div>
                                <div className='table_desc'>Active /Passive tables</div>
                                <img src={tableImg} alt="tableImg" />
                                <div className='buttons_line'>
                                    <a href="/#" className='table_btn'>Skip</a>
                                    <a href="/#" className='table_btn save'>Save</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div >
    )
}

export default RestaurantInner;