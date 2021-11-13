import React from 'react';
import '../sass/imageholder.scss';

const ImageHolder = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((image, index) => {
        return (
          <div className="image-holder-wrapper" key={index}>
            <img src={image.uri} alt={image.src} className="image-holder" />
          </div>
        );
      })}
    </>
  );
};

export default ImageHolder;
