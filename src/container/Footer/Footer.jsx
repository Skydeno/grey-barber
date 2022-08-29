import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { BsBootstrapFill } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app_footer-headtext">Skontaktuj się z nami</h1>
        <p className="p__opensans">Wojciecha Kossaka 1/9, 83-000 Pruszcz Gdański</p>
        <p className="p__opensans"><a href="tel:504 347 048">504 347 048</a></p>
        <p className="p__opensans"><a href="mailto:grey.barber.aj@gmail.com" style={{textTransform: 'lowercase'}}>grey.barber.aj@gmail.com</a></p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.greybarberLogo} alt="Logo" />
        <p className="p__opensans">"Tutaj wsatw cysta" Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, excepturi, quia commodi adipisci rerum iusto pariatur tempore cumque natus eaque.</p>
        <div className="app__footer-links_icons">
          <Router>
            <Link to={"//www.facebook.com/GreyBarberAJ/photos"} aria-label="Facebook">
              <FaFacebookSquare />
            </Link>
            <Link to={"//www.instagram.com/greybarber__/"} aria-label="Instagram">
              <FiInstagram />
            </Link>
            <Link to={"//booksy.com/pl-pl/96782_grey-barber_barber-shop_21804_pruszcz-gdanski"} aria-label="Booksy">
              <BsBootstrapFill />
            </Link>
          </Router>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app_footer-headtext">Godziny pracy</h1>
        <p className="p__opensans">Poniedziałek - Piątek:</p>
        <p className="p__opensans">10:00 - 19:00</p>
        <p className="p__opensans">Sobota:</p>
        <p className="p__opensans">10:00 - 14:00</p>
        <p className="p__opensans">Niedziela:</p>
        <p className="p__opensans">Nieczynne</p>
      </div>
    </div>
    <div className="app__footer__copyright">
      <p className="p__opensans">2022 Grey Barber. All Rights Reserved</p>
      {/* <a href="https://www.flaticon.com/free-icons/scissors" title="scissors icons">Scissors icons created by Freepik - Flaticon</a> */}
    </div>
  </div>
);

export default Footer;
