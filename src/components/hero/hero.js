import React from 'react';
import restaurantFood from '../../assets/restauranfood.jpg';
import './hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className="content">
        <div className='card'>
          <h1 className='title'>Little Lemon</h1>
          <span>Chicago</span>
          <p id="companyInfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quidem aliquid rem tempora repellat hic laboriosam dolor saepe vel.</p>
          <button className='submit' type ="submit" >Reserve a Table</button>
        </div>
        <img className='hero-img' src={restaurantFood} alt="restaurant-food-img" />
      </div>
    </div>
  );
}

export default Hero;