import React from "react";

const OrderItem = ({ img, title, price, description }) => {
  return (
    <li className="card">
      <img src={img} alt={title} />
      <div className="titleAndPrice">
        <h5>{title}</h5>
        <p>{price}</p>
      </div>
      <p>{description}</p>
      <h5>Order a delivery</h5>
    </li>
  );
};

export default OrderItem;
