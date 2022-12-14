import React from 'react';
import '../OurCss/dashboardlayout.css'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import { Badge } from 'antd';

export default function DashboardLayout(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.user);
  //const userId = user._id;
  const usermenu = [
    {
      name: "Home",
      path: "/dashboard-home",
      icon: "ri-home-smile-line",
    },
    {
      name: "Therapists",
      path: "/dashboard",
      icon: "ri-dashboard-line",
    },
    {
      name: "Appointment",
      path: "/appointment",
      icon: "ri-todo-line",
    },
    {
      name: "Apply Therapist",
      path: "/apply-therapist",
      icon: "ri-user-search-line",
    },
  ];
  const adminmenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "ri-dashboard-line",
    },
    {
      name: "Users",
      path: "/admin/userlist",
      icon: "ri-file-user-line",
    },
    {
      name: "Therapists",
      path: "/admin/therapist-list",
      icon: "ri-shield-user-line",
    },
  ];
  const therapistmenu = [
    {
      name: "Home",
      path: "/dashboard-home",
      icon: "ri-home-smile-line",
    },
    {
      name: "Appointment",
      path: "/appointment",
      icon: "ri-todo-line",
    },
    {
      name: "Profile",
      path: `/therapist/profile/${user?._id}`,
      icon: "ri-shield-user-line",
    },
  ];
  const menuforRender = user?.isAdmin ? adminmenu : user?.isTherapist ? therapistmenu : usermenu; 
  const condition1 = user?.isAdmin === true; //to add dbleft class for bg-change as adming
  const condition2 = user?.isTherapist === true; //to add dbleft class for bg-change as adming
  return (
    <div>
      <div className="db-layout m-4">
        <div className={`left-db ${condition1 && "left-db-admin"} ${condition2 && "left-db-therapist"}`}>
          <div className="left-db-title">
            <h4>StyFit Portal</h4>
          </div>
          <div className="left-db-main">
            {menuforRender.map((menuitem) => {
              const isActive = location.pathname === menuitem.path;
              return (
                <div
                  className={`single-menu-item ${
                    isActive && `active-menu-item ` 
                  }`}
                >
                  <i className={menuitem.icon}></i>
                  <Link to={menuitem.path}>{menuitem.name}</Link>
                </div>
              );
            })}
            <div
              className="single-menu-item"
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-r-line"></i>
              <Link to="/login">Log Out</Link>
            </div>
          </div>
        </div>
        <div className="main-db">
          <div className="main-db-header">
            <div>Welcome to Stay Fit Physio Portal!</div>
            <div className="header-user">
              <Badge
                count={user?.unseenNotification.length}
                onClick={() => navigate("/notifications")}
              >
                <i className="ri-notification-3-line cursor-p"></i>
              </Badge>

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
