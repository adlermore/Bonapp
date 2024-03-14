
import React from 'react';
import blogInner from '../assets/img/blogInner.png';
import { motion } from "framer-motion";
import { FacebookShareButton, LinkedinShareButton } from 'react-share';

const BlogInner = () => {

    return (
        <motion.div className="blog_page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="blogInner_container">
                <div className="coverImg">
                    <img src={blogInner} alt="CoverImg" />
                </div>
                <div className="custom_container">
                    <div className="title_line">
                        <div className="blog_title">"Yerevan Bites: A Culinary Tour"</div>
                        <div className="blog_date more_btn">02.19.2024</div>
                    </div>
                    <div className="blog_description">
                        Step back in time and immerse yourself in the rich tapestry of old Georgian cuisine, where every dish is steeped in centuries of tradition and cultural significance. In the heart of the Caucasus, amidst the rugged landscapes and ancient vineyards, Georgian cuisine has flourished, drawing inspiration from the land and the seasons.
                        <br />
                        <br />
                        At the heart of old Georgian cuisine is a reverence for fresh, locally sourced ingredients – from tender meats and seasonal vegetables to aromatic herbs and spices. It's a cuisine that celebrates the bounty of the land and the skill of generations of cooks who have passed down their recipes and techniques through the ages.
                        <br />
                        <br />
                        One cannot speak of Georgian cuisine without mentioning the iconic khachapuri – a decadent cheese-filled bread that is as comforting as it is delicious. Legend has it that khachapuri dates back to ancient times, with each region of Georgia boasting its own unique variation of this beloved dish.
                        <br />
                        <br />
                        But khachapuri is just the beginning. Dive deeper into old Georgian cuisine, and you'll discover a treasure trove of hearty stews, vibrant salads, and delicate pastries. From the aromatic flavors of chakapuli, a savory lamb stew simmered with herbs and sour plums, to the delicate sweetness of churchkhela, a traditional candy made from grape must and nuts, every dish tells a story of tradition and heritage.
                        <br />
                        <br />
                        As you explore the flavors of old Georgian cuisine, you'll uncover the deep connections between food, family, and community. Meals are not just about sustenance but are a time-honored ritual, a chance to gather with loved ones and share in the joys of good food and conversation.

                    </div>
                    <div className="article_line">
                        <div className="article_block">
                            Article created by <a href='https://kamoblog.tv/' target='blank' className='author_article'> Kamo Blog</a>
                        </div>
                        <div className="share_line">
                            Share to <span className='icon-share'></span>
                            <div className="social_list">
                                <FacebookShareButton url='http://localhost:3000/blogInner/1' >  
                                <a target='blank' href="#/" className="icon-facebook"> </a></FacebookShareButton>
                                <LinkedinShareButton url='http://localhost:3000/blogInner/1' >
                                    <a target='blank' href='/#' className="icon-linkedin"> </a>
                                </LinkedinShareButton>
                                <LinkedinShareButton url='http://localhost:3000/blogInner/1' >
                                    <a target='blank' href='/#' className="icon-instagram"> </a>
                                </LinkedinShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default BlogInner;