import React from 'react';
import '../styles/members.css';

const Members = ({ user }) => {
  return (
    <div className="members-page">
      <div className="container">
        <div className="members-header">
          <h1>Member Area</h1>
          <p>Welcome, {user?.username}!</p>
        </div>

        <div className="member-profile">
          <h2>Your Profile</h2>
          <div className="profile-info">
            <div className="profile-item">
              <span className="profile-label">Username:</span>
              <span className="profile-value">{user?.username}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Email:</span>
              <span className="profile-value">{user?.email}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Role:</span>
              <span className="profile-value">{user?.role}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Member Since:</span>
              <span className="profile-value">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="member-content">
          <h2>Member Resources</h2>
          <p>
            As a member of GAHO Cultural Club, you have access to exclusive content, 
            cultural resources, and community features.
          </p>
          <p>
            Stay tuned for upcoming member-only events, educational materials, and 
            opportunities to contribute to our cultural preservation efforts.
          </p>
          
          <h3 style={{ marginTop: '2rem', color: 'var(--primary-color)' }}>
            Upcoming Member Benefits:
          </h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Access to digital cultural archives</li>
            <li>Priority registration for events</li>
            <li>Member-only workshops and seminars</li>
            <li>Community forum participation</li>
            <li>Cultural newsletter subscription</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Members;
