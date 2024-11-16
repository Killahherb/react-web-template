import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to React Web Template</h1>
        <p>Create your modern website with reusable components</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
