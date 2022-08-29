import React from 'react';

import { images } from '../../constants';
import { GiScissors } from 'react-icons/gi';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={ images.G } alt="Litera G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <div className="app__aboutus-title">
          <h1 className="headtext__cormorant">O nas</h1>
          <img className="app__subheading-stopek" src={images.stopek} alt="stopek"/>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum alias nulla in qui iste nobis! 
        Error repellat perferendis ex iure? 
        Quos voluptas id molestiae ex, quibusdam fugiat ratione minus dolores?</p>
        <button type="button" className="custom__button">Dowiedz się więcej</button>
      </div>

      <div className="app__aboutus-content_scissors flex__center">
        <img src={images.scissors} alt="about_scissors" />
      </div>

      <div className="app__aboutus-content_history">
      <div className="app__aboutus-title">
          <h1 className="headtext__cormorant">Początek</h1>
          <img className="app__subheading-stopek" src={images.stopek} alt="stopek"/>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum alias nulla in qui iste nobis! 
        Error repellat perferendis ex iure? 
        Quos voluptas id molestiae ex, quibusdam fugiat ratione minus dolores?</p>
        <button type="button" className="custom__button">Dowiedz się więcej</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
