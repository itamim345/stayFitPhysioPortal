import React from 'react';

export default function DashboardLayout() {
  return (
    <div>
      <div className="db-layout">
        <div className="left-db">
            <h2>Left DB</h2>
        </div>
        <div className="main-db">
            <div className="main-db-header">
                <p>main-db-header</p>
            </div>
            <div className="main-db-content">
                <h1>MAIN CONTENT</h1>
            </div>
        </div>
      </div>
    </div>
  );
}
