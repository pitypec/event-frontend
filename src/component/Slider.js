import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-slideshow-image/dist/styles.css';
import '../sass/slider.scss';

const Slider = ({ data }) => {
  return (
    <>
      <Carousel
        autoPlay
        interval={'1000'}
        showThumbs={false}
        showStatus={false}
      >
        {data.map((slideimage) => (
          <div className="img-holder">
            <img
              src={slideimage.original}
              alt={slideimage.alt}
              className="img-show"
            />
            <div className="inner-tile">
              <h1>{slideimage.description}</h1>
              <p>{slideimage.post}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
