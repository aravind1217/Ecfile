import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { UserAuth } from './AuthContext';
const Header=()=> {
 
    const { user } = UserAuth();

    const authLinks = (
      <div>
        <Avatar
          color={"#1E90FF"}
          
          name= {user && user.email}
          maxInitials={2}
          value="86%"
          size="40"
          round="20px"
        />
      </div>
    );

    const guestLinks = "";

    return <div>{user ? authLinks : guestLinks}</div>;
  
}



export default Header;