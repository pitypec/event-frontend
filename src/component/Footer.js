import React from 'react';
import '../sass/footer.scss';
import { ReactComponent as Logo } from '../svg/25.svg';
const Footer = () => {
  return (
    <footer>
      <div className="footer-one footer-all">
        <div className="footer-logo">
          <Logo />
        </div>
        <p>
          Lorem ipsum dolor sit amet, ecteur adipiscing elit. In molestie
          lobortis mi turpis tincidunt imperdiet. Ut gravida non sit ornare
          massa.
        </p>
      </div>
      <div className="footer-two footer-all">
        <h4>Contact Info</h4>
        <p>+234 768 090 56</p>
        <p>+234 768 090 56</p>
      </div>
      <div className="footer-three footer-all">
        <h4>General Info</h4>
        <p>
          Lorem ipsum dolor sit amet, ecteur adipiscing elit. In molestie
          lobortis mi turpis tincidunt imperdiet. Ut gravida non sit ornare
          massa.
        </p>
      </div>
      <div className="footer-four footer-all">
        <h4>Superlinks</h4>
        <p>
          Lorem ipsum dolor sit amet, ecteur adipiscing elit. In molestie
          lobortis mi turpis tincidunt imperdiet. Ut gravida non sit ornare
          massa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
