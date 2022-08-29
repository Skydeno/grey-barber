import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={ images.master } alt="Mistrz Adrian Jakubiszyn" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Nasz Mistrz"/>
      <h1 className="headtext__cormorant">The World of Haircuts and Shaves</h1>

      <div className="app__master-content">
        <div className="app__master-content_quote">
          <img src={images.quote} alt="cytat" />
          <p className="p__opensans">Krótkie Lorem które jest jako wstęp - zdanie zachęcające</p>
        </div>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Ipsam, possimus natus. Tempora molestiae iusto libero quam explicabo fugit nostrum, 
          quae aliquam harum qui autem omnis. Corporis consectetur ad quam sapiente.</p>
      </div>
      <div className="app__master-sign">
        <p>Adrian Jakubiszyn</p>
        <p className="p__opensans">Mistrz i założyciel</p>
        <img src={ images.sign } />
      </div>
    </div>
  </div>
);

export default Chef;
