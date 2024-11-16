import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} React Web Template. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
