import React from 'react';
import '../sass/about.scss';
import image from '../images/weaver.png';
import img from '../images/cover.png';
import RecentPost from '../component/RecentPost';
import { posts } from '../utils/recentPostSeed';
import SpeakerImage from '../images/about-one.png';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="about-container">
      <div className="service-img-holder">
        <img src={img} alt="download" width="100%" height={'auto'} />
        <h1>About our organization</h1>
      </div>
      <div className="about-wrapper">
        <div className="about-section">
          <div className="about-image">
            <img src={image} alt={''} />
          </div>
          <div className="uti-about">
            <div>
              <h4>About Us</h4>
            </div>
            <div>
              About Us The Oke-Ogun Trade Alliance was founded in 2021 and is an
              organization that works towards improving the economic, cultural
              and civic wellbeing of the Oke-Ogun region. It is a business
              network that seeks to further the interest of its members in a
              quest to make the Oke-Ogun region a one-stop business destination
              for prospective investors. The Oke-Ogun region itself is made up
              of towns and communities that are largely rural in nature. ATISBO,
              Oorelope, Olorunsogo, Irepo, Itesiwaju, Saki-West, Saki-East,
              Kajola, Iwajowa, and Iseyin are the major local government areas
              that sum up the Oke-Ogun region. Geographically, the region is
              bordered in the north by the Borgu division in Kwara state and in
              the west by Benin Republic. With an estimated population of 1,
              616,980 (2011) and a total land mass area of 13,537 km2(60% of Oyo
              State land), the region supports a myriad of thriving business
              activities.
            </div>
          </div>
        </div>
        <div className="about-middle-section">
          <div className="about-tile">
            <div>
              <div className="about-head">
                <h4>Mission Statement</h4>
              </div>
              <div>
                To strengthen the private sector in Oke-Ogun, through emphasis
                on trade promotion, industrial development, effective advocacy
                for sustainable economic policies, and a conducive climate for
                economic development.
              </div>
            </div>
          </div>
          <div className="about-tile about-tile-two">
            <div>
              <div className="about-head-two">
                <h4>Vision</h4>
              </div>
              <div>
                To be the leading private sector body for the business community
                in Oke-Ogun, providing members with an influential local,
                regional and global network for business growth.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-wrapper-two">
        <div className="about-wrapper-container">
          <img src={SpeakerImage} alt="Speaker" />
          <div>
            <p>Secatery General</p>
            <p>Oluwatosin Alaba</p>
            <p>
              “In the end, it comes down to values [...] We want the world our
              children inherit to be defined by the values enshrined in the UN
              Charter: peace, justice, respect, human rights, tolerance and
              solidarity.”
            </p>
          </div>
        </div>
        {/* <div className="about-contain">
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
        </div> */}
      </div>
    </div>
  );
};

export default About;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="second-block-two">
  <h4 className="post-block-title">Recent Posts</h4>
  <RecentPost data={posts} />
</div> */
}
