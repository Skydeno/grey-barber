import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="price_list">
    <div className="app__specialMenu-title">
      <SubHeading title="Które pasuje do Ciebie?" />
      <h1 className="headtext__cormorant">Przekonaj się na własnej skórze</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_master">
        <p className="app__specialMenu-menu_heading">Odwiedź mistrza</p>
        <div className="app__specialMenu_menu_items">
          {data.master.map((master, index) => (
            <MenuItem key={master.title + index} title={master.title} price={master.price} tags={master.tags}/>
          ))}
        </div>
      </div>

        <div className="app__specialMenu-menu_img">
          <div className="app__jackDaniels">
            <img src={images.JackDaniels} alt="Jack Daniels img" />
          </div>
        </div>

        <div className="app__specialMenu-menu_junior">
        <p className="app__specialMenu-menu_heading">Sprawdź juniora</p>
        <div className="app__specialMenu_menu_items">
          {data.junior.map((junior, index) => (
            <MenuItem key={junior.title + index} title={junior.title} price={junior.price} tags={junior.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <Router>
        <Link to={"//booksy.com/pl-pl/96782_grey-barber_barber-shop_21804_pruszcz-gdanski"} aria-label="Booksy">
          <button type="button" className="custom__button">Umów się teraz!</button>
        </Link>      
      </Router>
    </div>

  </div>
);

export default SpecialMenu;
