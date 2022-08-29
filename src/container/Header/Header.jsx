import React from 'react';
import { SubHeading } from '../../components';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="W pogoni za estetyką" />
      <h1 className="app__header-h1">Rozwiązaniem jest perfekcyjne strzyżenie</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
    <Router>
      <Link to="/#price_list">
        <button type="button" className="custom__button">Zobacz Cennik</button>
      </Link>
    </Router>
    </div>

    <div className="app__wrapper_img">
      <img src={images.greyIntro} alt="header img"/>
    </div>
  </div>
);

export default Header;
