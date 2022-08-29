import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300; // -300px
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Sam zobacz te cięcia</h1>
        <p className="p__opensans" style={{color: '#AAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Ipsam, possimus natus. Tempora molestiae iusto libero quam explicabo fugit nostrum, 
          quae aliquam harum qui autem omnis. Corporis consectetur ad quam sapiente.</p>
        <Router>
            <Link to={"//www.instagram.com/greybarber__/"} aria-label="Instagram">
              <button type="button" className="custom__button">Zobacz więcej</button>
            </Link>
        </Router>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06].map((image, index) => (
            <Router>
              <Link to={"//www.instagram.com/greybarber__/"} aria-label="Instagram">
                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`} >
                  <img src={image} alt="gallery_image" />
                  <BsInstagram className="gallery__image-icon" />
                </div>
              </Link>  
            </Router>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
