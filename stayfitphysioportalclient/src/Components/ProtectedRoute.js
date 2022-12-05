import React, { useEffect } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios'

export default function ProtectedRoute(props) {
    const {user} = useSelector((state) => state.user)
    const navigate = useNavigate();
    const getUser = async()=> {
        try {
            const response = await axios.post('/api/user/get-user-info', )
        } catch (error) {
            
        }
    }

    useEffect(() => {
      if(!user){
        getUser()
      }
    }, [user]);

    if(localStorage.getItem('token')){
        return props.children;
    }else {
        return <Navigate to="/login"/>
    }
}
