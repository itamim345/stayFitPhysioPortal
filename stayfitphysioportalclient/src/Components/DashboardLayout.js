import React from 'react';
import '../OurCss/dashboardlayout.css'
import {Link, useLocation} from "react-router-dom"
import { useSelector } from "react-redux";

export default function DashboardLayout(props) {
  const location = useLocation();
  const {user} = useSelector((state) => state.user)
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
            {menuforRender.map((menuitem) => {
              const isActive = location.pathname === menuitem.path;
              return (
                <div
                  className={`single-menu-item ${
                    isActive && `active-menu-item`
                  }`}
                >
                  <i className={menuitem.icon}></i>
                  <Link to={menuitem.path}>{menuitem.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main-db">
          <div className="main-db-header">
            <div>Welcome to Stay Fit Physio Portal!</div>
            <div className='header-user'>
              <i className="ri-notification-3-line"></i>
              <Link to="/user-profile">{user?.name}</Link>
            </div>
          </div>
          <div className="main-db-content">
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
