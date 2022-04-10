import React from 'react';
import img from '../images/cover.png';
import basket from '../images/basket.png';
import cassava from '../images/cassava.png';
import maize from '../images/maize.png';
import '../sass/services.scss';

const Services = () => {
  return (
    <div>
      <div className="service-img-holder">
        <img src={img} alt="download" width="100%" height={'auto'} />
        <h1>Our Services</h1>
      </div>
      <div className="service-holder">
        <div className="service-center">
          <div className="service-container">
            <div className="service-image-holder">
              <img src={cassava} alt="clover" />
            </div>
            <div className="title-holder-service">
              <p>
                About Us The Oke-Ogun Trade Alliance was founded in 2021 and is
                an organization that works towards improving the economic,
                cultural and civic wellbeing of the Oke-Ogun region. It is a
                business network that seeks to further the interest of its
                members in a quest to make the Oke-Ogun region a one-stop
                business destination for prospective investors. The Oke-Ogun
                region itself is made up of towns and communities that are
                largely rural in nature. ATISBO, Oorelope, Olorunsogo, Irepo,
                Itesiwaju, Saki-West, Saki-East, Kajola, Iwajowa, and Iseyin are
                the major local government areas that sum up the Oke-Ogun
                region. Geographically, the region is bordered in the north by
                the Borgu division in Kwara state and in the west by Benin
                Republic. With an estimated population of 1, 616,980 (2011) and
                a total land mass area of 13,537 km2(60% of Oyo State land), the
                region supports a myriad of thriving business activities.
              </p>
            </div>
          </div>
          <div className="service-container-two">
            <div className="service-image-holder">
              <img src={basket} alt="clover" />
            </div>
            <div className="title-holder-service">
              <p>
                About Us The Oke-Ogun Trade Alliance was founded in 2021 and is
                an organization that works towards improving the economic,
                cultural and civic wellbeing of the Oke-Ogun region. It is a
                business network that seeks to further the interest of its
                members in a quest to make the Oke-Ogun region a one-stop
                business destination for prospective investors. The Oke-Ogun
                region itself is made up of towns and communities that are
                largely rural in nature. ATISBO, Oorelope, Olorunsogo, Irepo,
                Itesiwaju, Saki-West, Saki-East, Kajola, Iwajowa, and Iseyin are
                the major local government areas that sum up the Oke-Ogun
                region. Geographically, the region is bordered in the north by
                the Borgu division in Kwara state and in the west by Benin
                Republic. With an estimated population of 1, 616,980 (2011) and
                a total land mass area of 13,537 km2(60% of Oyo State land), the
                region supports a myriad of thriving business activities.
              </p>
            </div>
          </div>
          <div className="service-container">
            <div className="service-image-holder">
              <img src={maize} alt="clover" />
            </div>
            <div className="title-holder-service">
              <p>
                About Us The Oke-Ogun Trade Alliance was founded in 2021 and is
                an organization that works towards improving the economic,
                cultural and civic wellbeing of the Oke-Ogun region. It is a
                business network that seeks to further the interest of its
                members in a quest to make the Oke-Ogun region a one-stop
                business destination for prospective investors. The Oke-Ogun
                region itself is made up of towns and communities that are
                largely rural in nature. ATISBO, Oorelope, Olorunsogo, Irepo,
                Itesiwaju, Saki-West, Saki-East, Kajola, Iwajowa, and Iseyin are
                the major local government areas that sum up the Oke-Ogun
                region. Geographically, the region is bordered in the north by
                the Borgu division in Kwara state and in the west by Benin
                Republic. With an estimated population of 1, 616,980 (2011) and
                a total land mass area of 13,537 km2(60% of Oyo State land), the
                region supports a myriad of thriving business activities.
              </p>
            </div>
          </div>
          <div className="service-container-two">
            <div className="service-image-holder">
              <img src={basket} alt="clover" />
            </div>
            <div className="title-holder-service">
              <p>
                About Us The Oke-Ogun Trade Alliance was founded in 2021 and is
                an organization that works towards improving the economic,
                cultural and civic wellbeing of the Oke-Ogun region. It is a
                business network that seeks to further the interest of its
                members in a quest to make the Oke-Ogun region a one-stop
                business destination for prospective investors. The Oke-Ogun
                region itself is made up of towns and communities that are
                largely rural in nature. ATISBO, Oorelope, Olorunsogo, Irepo,
                Itesiwaju, Saki-West, Saki-East, Kajola, Iwajowa, and Iseyin are
                the major local government areas that sum up the Oke-Ogun
                region. Geographically, the region is bordered in the north by
                the Borgu division in Kwara state and in the west by Benin
                Republic. With an estimated population of 1, 616,980 (2011) and
                a total land mass area of 13,537 km2(60% of Oyo State land), the
                region supports a myriad of thriving business activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
