import React from "react";

const OrderItem = ({ img, title, price, description, callToAction }) => {
  return (
    <li className="card">
      <img src={img} alt={title} />
      <div className="titleAndPrice">
        <h5>{title}</h5>
        <p id ='price'>{price}</p>
      </div>
      <p>{description}</p>
      <h5>{callToAction}</h5>
    </li>
  );
};

export default OrderItem;
