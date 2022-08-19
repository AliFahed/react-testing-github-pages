import React from 'react';

function MainContent() {
  return (
    <main className="main-content">
      <h2 className="main-page-title">Fun facts about React</h2>
      <ul className="ul">
        <div className="items">
          <div className="bullet-point">•</div>
          <li>Was first released in 2013</li>
        </div>
        <div className="items">
          <div className="bullet-point">•</div>
          <li>Was originally created by Jordan Walke</li>
        </div>
        <div className="items">
          <div className="bullet-point">•</div>
          <li>Has well over 100K stars on GitHub</li>
        </div>
        <div className="items">
          <div className="bullet-point">•</div>
          <li>Is maintained by Facebook</li>
        </div>
        <div className="items">
          <div className="bullet-point">•</div>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </div>
      </ul>
    </main>
  );
}

export default MainContent;
