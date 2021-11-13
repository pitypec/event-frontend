import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-slideshow-image/dist/styles.css';
import '../sass/slider.scss';

const Slider = ({ data }) => {
  return (
    <>
      <Carousel>
        {data.map((slideimage) => (
          <div>
            <img src={slideimage.legend} alt={slideimage.alt} />
            <p className="legend">{slideimage.legend}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
