import React from 'react';
import '../sass/about.scss';
import image from '../images/clover-two.png';
import RecentPost from '../component/RecentPost';
import { posts } from '../utils/recentPostSeed';
import SpeakerImage from '../images/about-one.png';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="uti-about">
          <h4>About OOTA</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tellus
            sed tortor libero sed in libero. Malesuada sit congue cras dictumst
            tristique. Felis pretium orci eu diam. Augue imperdiet volutpat
            ullamcorper amet mattis tortor. Lectus at in non et, quis in posuere
            tortor. Lobortis blandit at neque massa aliquam vel a mollis velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tellus
            sed tortor libero sed in libero. Malesuada sit congue cras dictumst
            tristique. Felis pretium orci eu diam. Augue imperdiet volutpat
            ullamcorper amet mattis tortor. Lectus at in non et, quis in posuere
            tortor. Lobortis blandit at neque massa aliquam vel a mollis velit.
          </p>
          <Link to="/about">Learn more</Link>
        </div>
        <div className="about-image">
          <img src={image} alt={''} />
        </div>
      </div>
      <div className="about-wrapper-two">
        <div className="about-contain">
          <div className="abt-address-wrapper">
            <div className="abt-address">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                tellus sed tortor libero sed in libero. Malesuada sit congue
                cras dictumst tristique. Felis pretium orci eu diam. Augue i
              </p>
            </div>
          </div>
          <div className="abt-speaker">
            <img src={SpeakerImage} alt="Speaker" />
            <h4>Secatery General</h4>
            <p>
              “In the end, it comes down to values [...] We want the world our
              children inherit to be defined by the values enshrined in the UN
              Charter: peace, justice, respect, human rights, tolerance and
              solidarity.”
            </p>
            <h6>Oluwatosin Alaba</h6>
          </div>
        </div>
        <div className="second-block-two">
          <h4 className="post-block-title">Recent Posts</h4>
          <RecentPost data={posts} />
        </div>
      </div>
    </div>
  );
};

export default About;
