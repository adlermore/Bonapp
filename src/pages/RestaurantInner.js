
import React from 'react';
import '../assets/scss/RestaurantInner/_restaurantsInner.scss';
import bg1 from '../assets/img/bg1.png';
import Reservation from '../components/Reservation/Reservation';
import restaurantInnerImg1 from '../assets/img/restaurantInner1.png'

const RestaurantInner = () => {
  return (
    <div className='restaurantInner'>
      <Reservation background={bg1} innerName = {'Restaurant name'} innerDescription={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'} />
      <div className='inner_cover'>
        <img src={restaurantInnerImg1} alt='coverInner'/>
      </div>
    </div>
  )
}

export default RestaurantInner;