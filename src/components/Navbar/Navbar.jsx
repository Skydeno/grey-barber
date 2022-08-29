import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiRazorBlade } from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.greybarber} alt="Grey Barber" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Główna</a></li>
      <li className="p__opensans"><a href="#about">O nas</a></li>
      <li className="p__opensans"><a href="#price_list">Usługi</a></li>
      <li className="p__opensans"><a href="#gallery">Galeria</a></li>
      <li className="p__opensans"><a href="#contact">Kontakt</a></li>
    </ul>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <GiRazorBlade fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
      <ul className="app__navbar-smallscreen_links">
        <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#home">Główna</a></li>
        <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#about">O nas</a></li>
        <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#price_list">Usługi</a></li>
        <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#gallery">Galeria</a></li>
        <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#contact">Kontakt</a></li>
      </ul>
      </div>
      )}
    </div>
  </nav>
  )};

export default Navbar;
