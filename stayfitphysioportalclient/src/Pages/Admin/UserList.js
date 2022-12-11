import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DashboardLayout from '../../Components/DashboardLayout';
import {showLoading, hideLoading} from '../../Redux/alertReducers'
import "../../OurCss/common.css";

export default function UserList() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]) //Use State 
  
  //useEfftect
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async() => {
    try {
      dispatch(showLoading())
      const response = await axios.get('/api/admin/get-all-users', {
        headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
              }
      })
      dispatch(hideLoading());
      if(response.data.success){
        setUser(response.data.data)
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  }
  const columns = [
    {
      title: 'name',
      dataIndex: 'name'
    },
    {
      title: 'email',
      dataIndex: 'email'
    },
    {
      title: 'actions',
      dataIndex: 'actions',
      render: (text, record)=> (
        <div className='d-flex'>
          <em>Block</em>
        </div>
      )
    }
  ]
  return (
    <DashboardLayout>
       <p>UserList</p>
       <Table columns={columns} dataSource={user}/>
    </DashboardLayout>
  );
}
