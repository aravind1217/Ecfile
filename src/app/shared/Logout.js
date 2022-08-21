import {UserAuth } from '../pages/AuthContext'

import React from 'react';

import { Link, Redirect,useHistory } from 'react-router-dom';

const Logout = () => {
  const { user, logout } = UserAuth();
  const navigate = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      navigate.push('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
  
     

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
  );
};


export default Logout;