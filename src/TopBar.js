// src/TopBar.js
import React, { useState } from 'react';
import './TopBar.css';

function TopBar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="topbar">
      <div className="topbar-logo">MyApp</div>
      <div className="topbar-user">
        <img
          src="https://via.placeholder.com/40" 
          alt="User Icon" 
          className="user-icon"
        />
        <button className="settings-button" onClick={toggleSettings}>
          ⚙️
        </button>

        {isSettingsOpen && (
          <div className="settings-menu">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
