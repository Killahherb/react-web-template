import React from 'react';
import './Dashboard.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Nav />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Welcome Back, User!</h1>
          <p>Your Dashboard Overview</p>
        </header>

        <section className="statistics">
          <div className="stat-card">
            <h2>120</h2>
            <p>New Users</p>
          </div>
          <div className="stat-card">
            <h2>80</h2>
            <p>Active Projects</p>
          </div>
          <div className="stat-card">
            <h2>15</h2>
            <p>Pending Tasks</p>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activities</h2>
          <ul>
            <li>Updated Project X - 2 hours ago</li>
            <li>Completed Task Y - 5 hours ago</li>
            <li>New User Registered - 1 day ago</li>
          </ul>
        </section>

        <section className="user-profile">
          <h2>Your Profile</h2>
          <div className="profile-card">
            <h3>John Doe</h3>
            <p>Email: johndoe@example.com</p>
            <p>Member since: January 2023</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
