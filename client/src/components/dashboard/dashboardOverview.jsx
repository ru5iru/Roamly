import React from 'react';
import './dashboardOverview.scss'; // Import your Sass file

const DashboardOverview = () => {
  // Simulated data (replace with real data from API or state management)
  const dailyVisitors = 150;
  const traffic = 2300;
  const userEngagement = 75;
  const newPosts = 5;
  const comments = 45;
  const revenue = 7500;

  return (
    <div className="dashboard-overview">
      <h2>Overview</h2>
      <div className="metrics">
        <div className="metric">
          <h3>Daily Visitors</h3>
          <p>{dailyVisitors}</p>
        </div>
        <div className="metric">
          <h3>Website/App Traffic</h3>
          <p>{traffic}</p>
        </div>
        <div className="metric">
          <h3>User Engagement</h3>
          <p>{userEngagement}%</p>
        </div>
        <div className="metric">
          <h3>New Posts</h3>
          <p>{newPosts}</p>
        </div>
        <div className="metric">
          <h3>Comments</h3>
          <p>{comments}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
