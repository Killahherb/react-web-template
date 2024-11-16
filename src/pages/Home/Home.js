import React from 'react';
import Nav from '../../components/Nav/Nav';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Nav />
      <Banner />
      <div className="content-section">
        <h2>Why Choose Us?</h2>
        <p>
          We provide modern and reusable React components to build websites and
          web apps. Whether you're building a small website or a scalable web
          app, our template is a great starting point.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
