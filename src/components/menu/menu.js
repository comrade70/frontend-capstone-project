import React from "react"
import greekSalad from '../../assets/greek salad.jpg'
import bruchetta from '../../assets/bruchetta.svg'
import lemonDessert from '../../assets/lemon dessert.jpg'
import OrderItem from "./OrderItem"
import './menu.css'

const Menu = () => {

  const MenuList = [
    {
      title: "Greek Salad",
      description:
        "Greek salad so creamy and nutritious. Perfectly blended for your consumption",
      price: "$10.55",
      img: greekSalad,
    },
    {
      title: "Bruchetta",
      description:
        "Bruschetta is an antipasto from italy consisting of grilled bread rubbed with garlic and topped with olive oil oil and salt",
      price: "$6.91",
      img: bruchetta,
    },
    {
      title: "Lemon Dessert",
      description:
        "Treats like lemon cheesecake and lemon pound cake to mouth in your lemon curd.",
      price: "$7",
      img: lemonDessert,
    },
  ];
  return (
    <div className="menu">
      <div className="content">
        <div className="title">
          <h2>Specials</h2>
          <button className='submit' type ="submit" >Online Menu</button>
        </div>
        <ul className="card-grid">
          {MenuList.map((item) => {
            return <OrderItem {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Menu;