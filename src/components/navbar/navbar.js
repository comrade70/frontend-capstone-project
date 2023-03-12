import Logo from '../../assets/Logo.svg'
import React from "react"
//import '../../App.css';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <ul className='nav-menu'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
