import React, {useState} from "react"
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import Logo from '../../assets/Logo.svg'
import './navbar.css';

function Navbar() {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservation</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
        <div className="hamburger" onClick ={handleClick}>
          {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon'/>)}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
