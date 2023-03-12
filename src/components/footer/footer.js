import React from "react"
import Logo from '../../assets/Logo.svg'
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='footer-grid'>
        <div className='footer-section1'>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='footer-link footer-section2'>
          <ul className="footer-link">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className='footer-link footer-section3'>
          <ul className="footer-link">
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className='footer-section4'>
          <ul className="footer-link">
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;