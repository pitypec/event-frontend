import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import '../sass/minifly.scss';

const Minifly = (props) => {
  const { data } = props;
  return (
    <>
      <IconContext.Provider value={{ color: 'green' }}>
        {data.map(({ Icon, caption, figure, narrative }, index) => {
          return (
            <div className="second-block-inner" key={index}>
              <div className="iconic-div">
                <Icon size={50} />
              </div>
              <p className="figure">{figure}</p>
              <h2 className="narrative">{narrative}</h2>
              <p className="caption">{caption}</p>
              <p className="more-link">
                <span>More About Us </span>
                <Link to="/about">
                  <AiOutlineArrowRight />
                </Link>
              </p>
            </div>
          );
        })}
      </IconContext.Provider>
    </>
  );
};

export default Minifly;
