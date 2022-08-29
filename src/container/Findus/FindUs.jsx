import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}>Odwiedź nas</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{marginBottom: '2rem'}}>Wojciecha Kossaka 1/9, 83-000 Pruszcz Gdański</p>
        <p className="p__opensans"><span style={{fontWeight: '400'}}>Telefon</span> <a href="tel:504 347 048">504 347 048</a> </p>
        <p className="p__opensans"><span style={{fontWeight: '400'}}>e-mail</span> <a href="mailto:grey.barber.aj@gmail.com" style={{textTransform: 'lowercase'}}>grey.barber.aj@gmail.com</a> </p>
        <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Godziny otwarcia</p>
        <p className="p__opensans"><span style={{fontWeight: '700'}}>Poniedziałek - Piątek:</span> 10:00 - 19:00</p>
        <p className="p__opensans"><span style={{fontWeight: '700'}}>Sobota:</span> 10:00 - 14:00</p>
        <p className="p__opensans"><span style={{fontWeight: '700'}}>Niedziela:</span> Nieczynne</p>
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}}>Odwiedź nas</button>
    </div>
    <div className="app__wrapper_img">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9321.91928672503!2d18.6359652!3d54.2600888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x838a40f35d919213!2sGrey%20Barber%20Adrian%20Jakubiszyn!5e0!3m2!1spl!2spl!4v1644932913941!5m2!1spl!2spl" style={{width: '600px', height: '450px', border: '0', allowfullscreen: '', loading: 'lazy'}}></iframe>
    </div>
  </div>
);

export default FindUs;
