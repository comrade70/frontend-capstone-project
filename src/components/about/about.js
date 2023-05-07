import React from "react"
import restaurantFood from '../../assets/restauranfood.jpg'
import './about.css';

function About() {
  return (
    <div className='about'>
      <div className="content">
        <div className='card'>
          <h1 className='title'>Little Lemon</h1>
          <span>Chicago</span>
          <p id="companyInfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quidem aliquid rem tempora repellat hic laboriosam dolor saepe vel.</p>
        </div>
        <img className='about-img' src={restaurantFood} alt="restaurant-food-img" />
      </div>
    </div>
  );
}

export default About;