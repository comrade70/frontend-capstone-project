import React from "react"
import greekSalad from '../../assets/greek salad.jpg'
import bruchetta from '../../assets/bruchetta.svg'
import lemonDessert from '../../assets/lemon dessert.jpg'
import './menu.css'

function Menu() {
  return (
    <div className="menu">
      <div className="content">
        <div className="title">
          <h2>Specials</h2>
          <button className='submit' type ="submit" >Online Menu</button>
        </div>
        <div className="card-grid">
          <div className="card">
            <img src={greekSalad} alt="greek-salad-img" />
            <h5>Greek Salad</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora aliquid voluptatibus dicta, numquam</p>
            <h6>Order a delivery</h6>
          </div>

          <div className="card">
            <img src={bruchetta} alt="bruchetta-img" />
            <h5>Bruchetta</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora aliquid voluptatibus dicta, numquam</p>
            <h6>Order a delivery</h6>
          </div>

          <div className="card">
            <img src={lemonDessert} alt="lemon-dessert-img" />
            <h5>Lemon dessert</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora aliquid voluptatibus dicta, numquam</p>
            <h6>Order a delivery</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;