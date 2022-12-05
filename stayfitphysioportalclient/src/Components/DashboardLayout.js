import React from 'react';
import '../OurCss/dashboardlayout.css'

export default function DashboardLayout(props) {
  return (
    <div>
      <div className="db-layout m-4">
        <div className="left-db">
            <h2>Left DB</h2>
        </div>
        <div className="main-db">
            <div className="main-db-header">
                <p>main-db-header</p>
            </div>
            <div className="main-db-content">
                <p>{props.children}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
