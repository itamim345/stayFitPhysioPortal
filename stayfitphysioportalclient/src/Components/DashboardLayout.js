import React from 'react';
import '../OurCss/dashboardlayout.css'
import {Link} from "react-router-dom"

export default function DashboardLayout(props) {
  const usermenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "ri-dashboard-line",
    },
    {
      name: "Appointment",
      path: "/appointment",
      icon: "ri-todo-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-user-search-line",
    },
    {
      name: "Log Out",
      path: "/logout",
      icon: "ri-logout-circle-r-line",
    },
  ];
  const menuforRender = usermenu;
  return (
    <div>
      <div className="db-layout m-4">
        <div className="left-db">
            <div className="left-db-title">
              <h4>StyFit Portal</h4>
            </div>
            <div className="left-db-main">
              {menuforRender.map( (menuitem) => {
                return (
                  <div className='single-menu-item'>
                    <i class={menuitem.icon}></i>
                    <Link to={menuitem.path}>{menuitem.name}</Link>
                  </div>
                );
              })}
            </div>
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
