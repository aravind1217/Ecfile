import React, { Component, Fragment } from "react";
import { Dropdown } from "react-bootstrap";
import { Link,Redirect } from "react-router-dom";
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import { BsCardList, BsPerson } from "react-icons/bs";
import {UserAuth } from '../pages/AuthContext'
import PropTypes from "prop-types";
import Logout from './Logout'
import User from '../pages/User'
class Navbar extends Component {
  
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  toggleRightSidebar() {
    document.querySelector(".right-sidebar").classList.toggle("open");
  }
  render() {
    
   
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoyDTlclh_13ZN5Fj4Qrv2gKx82Do0IZJ0g&usqp=CAU"
              alt="logo"
              style={{width: "70%" ,height: "70%"}}
            />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img
              src="data:image/png;base64,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"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <span className="mdi mdi-menu"></span>
          </button>

          {/* {isAuthenticated ? ( */}
            <Fragment>
              <div className="flex-grow-1" />

              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item nav-profile">
                  <Dropdown alignRight>
                    <Dropdown.Toggle
                      variant="link"
                      bsPrefix="p-0"
                      className="nav-link"
                    >
                      <Button 
                        endIcon={
                          <BsPerson
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        }
                        style={{
                          marginBottom: "-10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                      >
                       <User/>
                      </Button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="navbar-dropdown">
                      <Dropdown.Item>
                        <i className="mdi mdi-logout mr-2 text-primary"></i>{" "}
                      <Logout>Signout</Logout>
                          
                       
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </Fragment>
          {/* ) : ( */}
            <Fragment></Fragment>
          {/* )} */}

          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.toggleOffcanvas}
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}



export default Navbar;
