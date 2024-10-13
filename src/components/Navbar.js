// src/components/Navbar/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg'; // Ensure this path is correct
import contactImg from '../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../assets/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={300} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='About' spy={true} smooth={true} offset={-90} duration={300} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-90} duration={300} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-90} duration={300} className='desktopMenuListItem'>Contact</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        console.log('Scroll to contact section');
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt='Contact Me' className='desktopMenuImg' />Contact Me</button>
        <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={300} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='About' spy={true} smooth={true} offset={-90} duration={300} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-90} duration={300} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-90} duration={300} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
