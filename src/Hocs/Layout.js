import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "../app/shared/Navbar";
import Sidebar from "../app/shared/Sidebar";
import SettingsPanel from "../app/shared/SettingsPanel";
import Footer from "../app/shared/Footer";
import AppRoutes from "../app/AppRoutes";
import {AuthContextProvider} from '../app/pages/AuthContext'
const Layout = () => {
  const { pathname } = useLocation();


  return (
    <div className="container-scroller">
            <AuthContextProvider>

     {pathname !== "/login" && pathname !=='/signup' && <Navbar />}
    

      <div className="container-fluid page-body-wrapper">
      {pathname !== "/login"  && pathname !=='/signup' && <Sidebar />}
          

        <div className="main-panel">
       
          <div className="content-wrapper">
            
            <AppRoutes />
            <SettingsPanel />
          </div>
          
          <Footer />
        </div>
      </div>
      </AuthContextProvider>
    </div>
  );
};

export default Layout;
