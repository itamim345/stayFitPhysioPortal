import { Tabs } from 'antd';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../Components/DashboardLayout';
import { hideLoading, showLoading } from '../Redux/alertReducers';
import { setUser } from '../Redux/userSlice';

export default function Notifications() {
    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const markAllasSeen = async() => {
        try {
            dispatch(showLoading());
            const response = await axios.post("/api/user/mark-all-notifications-seen", {userId: user._id}, {
              headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
              }
            })
            dispatch(hideLoading())
            if(response.data.success){
                toast.success(response.data.message);
                dispatch(setUser(response.data.data))
            }else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading())
            toast.error("Something Went Wrong!");
        }
    }
    const deleteAllNotify = async() => {
        try {
            dispatch(showLoading());
            const response = await axios.post("/api/user/delete-all-notifications", {userId: user._id}, {
              headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
              }
            })
            dispatch(hideLoading())
            if(response.data.success){
                toast.success(response.data.message);
                dispatch(setUser(response.data.data))
            }else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading())
            toast.error("Something Went Wrong!");
        }
    }
  return (
    <DashboardLayout>
      <h3>Notification</h3>
      <Tabs>
        <Tabs.TabPane tab="Unseen" key={0}>
          <div className="d-flex justify-content-end">
            <p
              className="text-decoration-underline cursor-p"
              onClick={() => markAllasSeen()}
            >
              Mark All As Seen
            </p>
          </div>
          {user?.unseenNotification.map((notify) => (
            <div
              className="card p-3 m-2"
              onClick={() => navigate(notify.onClickPath)}
            >
              <div className="card-text">{notify.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Seen" key={1}>
          <div className="d-flex justify-content-end">
            <p className="text-decoration-underline cursor-p" onClick={()=> deleteAllNotify()}>Delete All</p>
          </div>
          {user?.seenNotifications.map((notify) => (
            <div
              className="card p-3 m-2"
              onClick={() => navigate(notify.onClickPath)}
            >
              <div className="card-text">{notify.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </DashboardLayout>
  );
}
