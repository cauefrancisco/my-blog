import React, { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from './../assets/Hamburger.svg';

import './Navbar.scss';

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className='nav'>
        <div className="logo">
          <Link className='linkTitle' to='/'><h1>Cosmic Dancer</h1></Link>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger />
            </div>

        <div className={`nav-elements menu  ${showNavbar && 'active'}`}>
          <ul>
            <li><NavLink className='linksNav' to='/'>Home</NavLink></li>
            <li><NavLink className='linksNav categories' to='/categories'>Categories</NavLink></li>
            <li><NavLink className='linksNav' to='/about'>About</NavLink></li>
            <div className='loginIcons'> 
            <NavLink title='Write' className='linksWrite' to='/write'> <TfiWrite className='addIcon' /></NavLink>
            <li>
                {/* <span>Caue</span> */}
                <span title='LogOut' className='logout'><AiOutlineLogout /></span>
            </li>
            </div>
          </ul>
          
        </div>
    </nav>
  )
}

export default Navbar;