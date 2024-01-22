import React , { useState} from 'react';
import { Link } from 'react-router-dom';

const RestaurantBlock = ({ restaurant }) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div key={restaurant.Id} className='restaurant_block'>
      <div className={isHovered ? 'block_inner hovered' : 'block_inner'}>
        <Link 
          to={`/restaurantInner/${restaurant.Id}`}
          className='block_image'  
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={restaurant.Image} alt="RestaurantImg" />
        </Link>
        <Link 
          to={`/restaurantInner/${restaurant.Id}`}
          className='rest_name'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {restaurant.Name}
        </Link>
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
    </div>
  )
}

export default RestaurantBlock;