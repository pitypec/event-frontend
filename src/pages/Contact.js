import React from 'react';
import '../sass/contact.scss';
import map from '../images/map.png';
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h4>Contact us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tellus
          sed tortor libero sed in libero. Malesuada sit congue cras dictumst
          tristique. Felis pretium orci eu diam. Augue imperdiet volutpat
          ullamcorper amet mattis tortor. Lectus at in non et, quis in posuere
          tortor.
        </p>
        <form>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <textarea id="message" name="message" placeholder="Message" />
          <button type="submit">Message</button>
        </form>
      </div>
      <div className="contact-map">
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default Contact;
