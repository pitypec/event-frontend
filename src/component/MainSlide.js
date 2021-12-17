import React from 'react';
import ImageGallery from 'react-image-gallery';

const MainSlide = (props) => {
  const { data } = props;
  return (
    <ImageGallery
      items={data}
      autoPlay
      showNav={false}
      showBullets={false}
      showPlayButton={false}
      thumbnailPosition={'right'}
    />
  );
};

export default MainSlide;

// <Carousel
// autoPlay
// infiniteLoop
// showThumbs={true}
// dynamicHeight={false}
// showIndicators={false}
// showArrows={false}
// showStatus={false}
// useKeyboardArrows={true}
// interval={1500}
// >
// {data.map((headline, index) => {
//   return (
//     <>
//       <div className="image-wrapper">
//       <img src={headline.uri} alt="event" />
//       </div>
//       <img src={headline.uri} alt="event" />
//       <p>{headline.headline}</p>
//       <p className="headline-one-wrapper">
//         <div className="headline-one">
//           <h2>{headline.headline}</h2>
//           <p>{headline.post}</p>
//           <Link to="/">Learn more</Link>
//         </div>
//       </p>
//     </>
//   );
// })}
// </Carousel>
