import React from 'react';
import './About.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Nav />
      <section className="hero-banner">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Learn more about who we are and our mission to build great digital
            experiences.
          </p>
        </div>
      </section>

      <section className="company-overview">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            ReactWebTemplate is a versatile and modern platform dedicated to
            helping developers and businesses create amazing web experiences.
            Our journey began with the belief that anyone should have the power
            to bring their vision to life with the right tools.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="avatar"></div>
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="avatar"></div>
              <h3>Jane Smith</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <div className="avatar"></div>
              <h3>Emily Johnson</h3>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
