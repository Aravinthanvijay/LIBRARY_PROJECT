import React from 'react';
import './Profile.css';

const Profile = () => {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "2024-01-01",
    readingPreferences: ["Fiction", "Science Fiction", "Mystery"],
    stats: {
      booksBorrowed: 15,
      booksReturned: 12,
      currentlyBorrowed: 3,
      wishlistedBooks: 8
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <span>👤</span>
        </div>
        <h1>{userProfile.name}</h1>
        <p className="member-since">Member since {new Date(userProfile.memberSince).toLocaleDateString()}</p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Email</span>
              <span className="value">{userProfile.email}</span>
            </div>
            <div className="info-item">
              <span className="label">Reading Preferences</span>
              <div className="preferences-list">
                {userProfile.readingPreferences.map((pref, index) => (
                  <span key={index} className="preference-tag">{pref}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Library Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">{userProfile.stats.booksBorrowed}</span>
              <span className="stat-label">Books Borrowed</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{userProfile.stats.booksReturned}</span>
              <span className="stat-label">Books Returned</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{userProfile.stats.currentlyBorrowed}</span>
              <span className="stat-label">Currently Borrowed</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{userProfile.stats.wishlistedBooks}</span>
              <span className="stat-label">Wishlisted Books</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Account Settings</h2>
          <div className="settings-grid">
            <button className="settings-btn">
              Change Password
            </button>
            <button className="settings-btn">
              Update Email Preferences
            </button>
            <button className="settings-btn">
              Edit Reading Preferences
            </button>
            <button className="settings-btn danger">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
