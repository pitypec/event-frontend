import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/header.scss';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineYoutube,
  AiTwotoneMail,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { ReactComponent as Logo } from '../svg/25.svg';
const Header = () => {
  return (
    <IconContext.Provider value={{ color: 'green' }}>
      <header>
        <div className="col-one">
          <div className="col-one-meme">
            <h6>Welcome to OOTA</h6>
            <h6>About us/Privacy Policy/Terms of use/Contact us</h6>
          </div>
          <div className="col-one-child">
            <ul>
              <li>Follow Us</li>
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
            <div className="col-one-child-two">
              <AiTwotoneMail size={10} />
              <h6>OOTA@gmail.com</h6>
            </div>
          </div>
        </div>
        <div className="col-two">
          <div className="col-two-child">
            <div className="logo">
              <div className="logo-wrapper">
                <Logo />
              </div>
              <h6>Oke-Ogun Trade Alliance (OOTA)</h6>
            </div>
            <div className="logo-pal">
              <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
              </ul>
            </div>
          </div>
        </div>
        <nav className="col-three">
          <ul>
            <Link to="/">Membership</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Services</Link>
            <Link to="/">Gallery</Link>
          </ul>
        </nav>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
