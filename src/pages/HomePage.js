
import React from 'react';
import '../assets/scss/HomePage/_homePage.scss';
import Reservation from '../components/Reservation/Reservation';
import HomeReservationImg from '../assets/img/homeReservation.png';
import categoryImg1 from '../assets/img/categoryImg1.png';
import categoryImg2 from '../assets/img/categoryImg2.png';
import categoryImg3 from '../assets/img/categoryImg3.png';
import categoryImg4 from '../assets/img/categoryImg4.png';
import bannerImg from '../assets/img/baner.png';
import bannerImg2 from '../assets/img/baner2.png';
import restaurantImg1 from '../assets/img/restaurantImg1.png';


const popularRestaurants = [
    {
        Id: 0,
        Image: restaurantImg1,
        Name: 'Restaurant Name1',
        Country: 'Yerevan, Saryan str.',
        Rate: 5
    },
    {
        Id: 1,
        Image: restaurantImg1,
        Name: 'Restaurant Name2',
        Country: 'Sisian, Saryan str.',
        Rate: 3
    },
    {
        Id: 2,
        Image: restaurantImg1,
        Name: 'Restaurant Name3',
        Country: 'Artimed, Saryan str.',
        Rate: 2
    },
    {
        Id: 3,
        Image: restaurantImg1,
        Name: 'Restaurant Name4',
        Country: 'Sevan, Saryan str.',
        Rate: 5
    }
]

const NewRestaurants = [
    {
        Id: 4,
        Image: restaurantImg1,
        Name: 'Restaurant Name5',
        Country: 'Yerevan, Saryan str.',
        Rate: 5
    },
    {
        Id: 5,
        Image: restaurantImg1,
        Name: 'Restaurant Name6',
        Country: 'Sisian, Saryan str.',
        Rate: 4
    },
    {
        Id: 6,
        Image: restaurantImg1,
        Name: 'Restaurant Name7',
        Country: 'Artimed, Saryan str.',
        Rate: 5
    },
    {
        Id: 7,
        Image: restaurantImg1,
        Name: 'Restaurant Name8',
        Country: 'Sevan, Saryan str.',
        Rate: 5
    }
]

const HomePage = () => {

    return (
        <div className="home_page">
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
                        {popularRestaurants.map((restaurant) => (
                            <div key={restaurant.Id} className='restaurant_block'>
                                <div className='block_image'>
                                    <img src={restaurant.Image} alt="RestaurantImg" />
                                </div>
                                <div className='rest_name'>{restaurant.Name}</div>
                                <div className='rest_description'>{restaurant.Country}</div>
                                <div className='rest_rate'>
                                    {(() => {
                                        const result = [];
                                        for (let index = 0; index < restaurant.Rate; index++) {
                                            result.push(<span key={index} className='icon-star'></span>);
                                        }
                                        return result;
                                    })()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='newRes_section'>
                <div className='custom_container'>
                    <div className='block_title'>Popular</div>
                    <div className='restaurants_list'>
                        {NewRestaurants.map((restaurant) => (
                            <div key={restaurant.Id} className='restaurant_block'>
                                <div className='block_image'>
                                    <img src={restaurant.Image} alt="RestaurantImg" />
                                </div>
                                <div className='rest_name'>{restaurant.Name}</div>
                                <div className='rest_description'>{restaurant.Country}</div>
                                <div className='rest_rate'>
                                    {(() => {
                                        const result = [];
                                        for (let index = 0; index < restaurant.Rate; index++) {
                                            result.push(<span key={index} className='icon-star'></span>);
                                        }
                                        return result;
                                    })()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='banner_section banner_section2'>
                <img src={bannerImg2} alt="banerImg" />
            </div>
        </div>
    )
}

export default HomePage;