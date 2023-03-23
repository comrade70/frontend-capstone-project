import React, {useState} from "react"
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import Logo from '../../assets/Logo.svg'
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="#">Menu</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="#">Order Online</Link></li>
          <li><Link to ="#">Login</Link></li>
        </ul>
        <div className="hamburger" onClick ={handleClick}>
          {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon'/>)}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
