import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../sass/home.scss';
import Cover from '../images/cover.png';
import { data } from '../utils/imageseed';
import ImageHolder from '../component/ImageHolder';
import { flyer } from '../utils/miniflySeed';
import Minifly from '../component/Minifly';
import Picture from '../images/announcement1.png';
import RecentPost from '../component/RecentPost';
import { posts } from '../utils/recentPostSeed';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from '../component/Slider';
import { headlines } from '../utils/mainSliideSeed';

const Home = () => {
  return (
    <section>
      <div className="main-block">
        <div className="main-one">
          <Slider data={headlines} />
        </div>
      </div>
      <div className="section-two-container">
        <div className="section-two">
          <h2>About Our Organisation</h2>
          <p>
            The Oke-Ogun Trade Alliance was founded in 2021 and is an
            organization that works towards improving the economic, cultural and
            civic wellbeing of the Oke-Ogun region.
          </p>
          <div className="link-min">
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="second-block">
        <div className="annoucement-tile">
          <img src={Picture} alt="annoucement" />
        </div>
        <div className="title-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tellus
            sed tortor libero sed in libero. Malesuada sit congue cras dictumst
            tristique. Felis pretium orci eu diam. Augue imperdiet volutpat
            ullamcorper amet mattis tortor. Lectus at in non et, quis in posuere
            tortor. Lobortis blandit at neque massa aliquam vel a mollis velit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
// eslint-disable-next-line no-lone-blocks
{
  /* <h4 className="post-block-title">Recent Posts</h4>
<RecentPost data={posts} /> */
}

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="main-slide">
            <div className="image-wrapper">
              <img src={Cover} alt="event" />
            </div>
            <div className="headline-one-wrapper">
              <div className="headline-one">
                <h2>
                  24th Annual Meeting of the Leaders of OOTA: The Empowerment of
                  our Youth in Nigeria
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                  tellus sed tortor libero sed in libero. Malesuada sit congue
                  cras dictumst tristique. Felis pretium orci eu diam. Augue
                  imperdiet volutpat ullamcorper amet mattis tortor. Lectus at
                  in non et, quis in posuere tortor. Lobortis blandit at neque
                  massa aliquam vel a mollis velit.
                </p>
                <Link to="/">Learn more</Link>
              </div>
            </div>
          </div>
          <div className="headline-two">
            <ImageHolder data={data} />
          </div> */
}

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="minifly-wrapper">
            <Minifly data={flyer} />
          </div> */
}
// eslint-disable-next-line no-lone-blocks
{
  /* <h4 className="recent-title">Recent Events</h4>
          <div className="recent-event-tile">
            <RecentEvent data={events} />
          </div> */
}
