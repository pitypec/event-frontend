import React from 'react';
import { Link } from 'react-router-dom';

const MainSlide = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((headline) => {
        return (
          <>
            <div className="image-wrapper">
              <img src={headline.uri} alt="event" />
            </div>
            <div className="headline-one-wrapper">
              <div className="headline-one">
                <h2>{headline.headline}</h2>
                <p>{headline.post}</p>
                <Link to="/">Learn more</Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MainSlide;
