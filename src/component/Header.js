import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/header.scss';
import { ReactComponent as Logo } from '../svg/25.svg';
const Header = () => {
  return (
    <header>
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
              <Link to="/services">Services</Link>
              <Link to="/tourism">Tourism</Link>
              <Link to="/association">Association</Link>
              <Link to="/projects">Projects</Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
