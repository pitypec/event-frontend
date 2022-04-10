import React from 'react';
import '../sass/footer.scss';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineYoutube,
  AiTwotoneMail,
} from 'react-icons/ai';
import { ReactComponent as Logo } from '../svg/25.svg';
const Footer = () => {
  return (
    <footer>
      <div className="footer-container-one">
        <div className="footer-input-wrapper">
          <div className="footer-input-inner">
            <p>Newsletter</p>
            <div>
              <input type="text" placeholder="Your Email" />
            </div>
          </div>
        </div>
        <div className="footer-nav">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>News</li>
            <li>About us</li>
            <li>Jobs</li>
            <li>Contact</li>
          </ul>
          <div className="social">
            <ul>
              <li>
                <AiFillFacebook size={10} />
              </li>
              <li>
                <AiFillTwitterSquare size={10} />
              </li>
              <li>
                <AiOutlineYoutube size={10} />
              </li>
            </ul>
          </div>
          <div></div>
          <p className="copyright">© Copyright 2019 - Lift Media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
