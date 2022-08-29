import React from 'react';

import { GiScissors } from 'react-icons/gi';
import { images } from '../../constants';
import './SubHeading.css';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
    <div className='app__subheading-title'>
      <p className='p__cormorant'>{title}</p>
      <img className="app__subheading-stopek" src={images.stopek} alt="stopek"/>
    </div>
  </div>
);

export default SubHeading;
