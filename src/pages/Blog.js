
import React from 'react';
import blogCover from '../assets/img/blogCover.png';
import blog1 from '../assets/img/blog1.png';
import blog2 from '../assets/img/blog2.png';
import blog3 from '../assets/img/blog3.png';
import blog4 from '../assets/img/blog4.png';
import '../assets/scss/Blog/_blog.scss';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Blog = () => {

    return (
        <motion.div className="blog_page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="cover_background" style={{ backgroundImage: `url(${blogCover})` }}>
                <div className="custom_container">
                    <div className="restaurants_description">
                        Welcome to Yerevan, where every corner holds a culinary surprise waiting to be discovered. From the bustling markets to cozy cafes, the city's diverse flavors invite you on a journey through Armenian cuisine. Indulge in juicy kebabs, sweet pastries, and fusion delights as you explore the vibrant food scene of Armenia's capital. Yerevan's culinary treasures are yours to savor – come hungry, leave happy!
                    </div>
                </div>
            </div>
            <div className="blog_section">
                <div className="custom_container">
                    <div className="page_title">Blog</div>
                    <div className="blog_list">
                        <div className="blog_container">
                            <div className="blog_image">
                                <img src={blog1} alt="BlogImg" />
                            </div>
                            <div className="blog_info">
                                <div className="blog_title">
                                    "Yerevan Bites: A Culinary Tour"
                                </div>
                                <div className="blog_description">
                                    Welcome to Yerevan, where every corner holds a culinary surprise waiting to be discovered. From the bustling markets to cozy cafes, the city's diverse flavors invite you on a journey through Armenian cuisine. Indulge in juicy kebabs, sweet pastries, and fusion delights as you explore the vibrant food scene of Armenia's capital. Yerevan's culinary treasures are yours to savor – come hungry, leave happy!
                                </div>
                                <Link to="/blogInner" className="more_btn">See more {'>'} </Link>
                            </div>
                        </div>
                        <div className="blog_container">
                            <div className="blog_image">
                                <img src={blog2} alt="BlogImg" />
                            </div>
                            <div className="blog_info">
                                <div className="blog_title">
                                    "Savoring Yerevan: A Culinary Journey Through Armenia's Capital"
                                </div>
                                <div className="blog_description">
                                    In the heart of the Caucasus, amidst the ancient streets and bustling markets of Yerevan, lies a culinary tapestry woven with centuries of tradition and flavor. As the sun rises over the majestic Mount Ararat, casting its golden hues upon the city, a symphony of aromas fills the air – the rich scent of freshly baked lavash mingling with the smoky allure of grilled kebabs, and the tantalizing sweetness of ripe apricots.
                                </div>
                                <Link to="/blogInner" className="more_btn">See more {'>'} </Link>
                            </div>
                        </div>
                        <div className="blog_container">
                            <div className="blog_image">
                                <img src={blog3} alt="BlogImg" />
                            </div>
                            <div className="blog_info">
                                <div className="blog_title">
                                    Exploring the Rich Heritage of Old Georgian Cuisine
                                </div>
                                <div className="blog_description">
                                    Step back in time and immerse yourself in the rich tapestry of old Georgian cuisine, where every dish is steeped in centuries of tradition and cultural significance. In the heart of the Caucasus, amidst the rugged landscapes and ancient vineyards, Georgian cuisine has flourished, drawing inspiration from the land and the seasons.
                                </div>
                                <Link to="/blogInner" className="more_btn">See more {'>'} </Link>
                            </div>
                        </div>
                        <div className="blog_container">
                            <div className="blog_image">
                                <img src={blog4} alt="BlogImg" />
                            </div>
                            <div className="blog_info">
                                <div className="blog_title">
                                    Exploring the Rich Heritage of Old Georgian Cuisine
                                </div>
                                <div className="blog_description">
                                    Step back in time and immerse yourself in the rich tapestry of old Georgian cuisine, where every dish is steeped in centuries of tradition and cultural significance. In the heart of the Caucasus, amidst the rugged landscapes and ancient vineyards, Georgian cuisine has flourished, drawing inspiration from the land and the seasons.
                                </div>
                                <Link to="/blogInner" className="more_btn">See more {'>'} </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Blog;