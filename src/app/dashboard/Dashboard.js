import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { Link } from "react-router-dom";
// import axios, { post } from 'axios';
import logo2 from "../../assets/images/dashboard/circle.svg";
import logo3 from "../../assets/images/dashboard/circle.svg";
// import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import gst from './gst.jpg'
import firm from './firm.jpg'
// import {Redirect} from 'react-router-dom';
import fssai from './fssai.jpg'
import { experimentalStyled as styled } from "@mui/material/styles";

import "react-toastify/dist/ReactToastify.css";
import iso from './iso1.png'
import iec from './iec.png'
import isi from './isi.png'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import support from './supports.png'
import reg from './reg1.png'
import service from './services.png'
toast.configure();


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Dashboard = () => {
  
<div className="col-md-4 stretch-card grid-margin">
          <div
            className="card  card-img-holder text-black"
            style={{ backgroundColor: "#fec107" }}
          >
            <Link
              to="/basic-ui/clinicalTrails"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="card-body">
                {/* <img src="" className="card-img-absolute" alt="circle" /> */}
                <h4 className="font-weight-normal mb-3 text-center">
                  Clinical Trails{" "}
                </h4>
              </div>
            </Link>
          </div>
        </div>
  



  
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span>{" "}
            Dashboard{" "}
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-data active" aria-current="page">
                <span></span>Overview{" "}
                <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-3 stretch-card grid-margin">
            <div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "white" }}
            >
              <Link
                to="/basic-ui/analysisform"
                style={{ color: "black", textDecoration: "none" }}
              >
               
                
                  <img src= {fssai}/>
              
              </Link>
            </div>
          </div>
          <div className="col-md-3 stretch-card grid-margin">
            <div
              className="card card-img-holder text-black"
              style={{ backgroundColor: "white" }}
            >
              <img  src= {gst}/>
            </div>
          </div>


          <div className="col-md-3 stretch-card grid-margin">
            <div
              className="card card-img-holder text-black"
              style={{ backgroundColor: "white" }}
            >
              <img  src= {firm}/>
            </div>
          </div>




          <div className="col-md-3 stretch-card grid-margin">
            <div
              className="card card-img-holder text-black"
              style={{ backgroundColor: "white" }}
            >
              <img  src= {iso}/>
            </div>
          </div>
          <div className="col-md-3 stretch-card grid-margin">
            <div
              className="card card-img-holder text-black"
              style={{ backgroundColor: "white" }}
            >
              <img  src= {iec}/>
            </div>
          </div>
          <div className="col-md-3 stretch-card grid-margin">
            <div
              className="card card-img-holder text-black"
              style={{ backgroundColor: "white" }}
            >
              <img  src= {isi}/>
            </div>
          </div>



          
        </div>

<div>
<Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
          <Link   to="/basic-ui/cnv"
                style={{ color: "black", textDecoration: "none" }}><div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
            <Item style={{ backgroundColor: "blue", color:'white' }}>
           
SOFTWARE SOLUTIONS             
            </Item>
            </div></Link>
           
          </Grid>
          
          <Grid item xs={2} sm={4} md={4}>
          <Link   to="#"
                style={{ color: "black", textDecoration: "none" }}><div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
            <Item style={{ backgroundColor: "blue", color:'white' }}>
              ACCOUNTING SOLUTIONS
            </Item>
            </div>
            </Link>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>

          <Link   to="#"
                style={{ color: "white", textDecoration: "none" }}><div
              className="card  card-img-holder text-black"
            >
            <Item style={{ backgroundColor: "blue", color:'white' }}>
              CERIFICATES & LICENCES
            </Item>
            </div>
            </Link>
          </Grid>
        </Grid>
      </Box>
     
</div>
<br/>
<div className='container-fluid'>
  <img src={support}/>
</div>
      
          <br/>
          <br/>
<div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title" style={{color:'red'}}>ECFILE You Bill - We File</h4>
                <p className="card-description">Ecfile is government recognised startup and ISO certified company. We are into Software development and tax compliance. Our primary vision to revolutionize the Business Accounting, Tax compliance and softwares to run your business hassle free.
Our mantra is You Bill, We file.When you dont file your returns in time, you will pay high penalty to GSTIN, MCA and INCOME TAX, where Ecfile plays a major role with repeated reminders and calls to do it in time. Our customers never paid penalty or late payment in any of the return filing services. </p>
               

               <div>
               <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={1} sm={4} md={4}>
          <Link   to="/basic-ui/cnv"
                style={{ color: "black", textDecoration: "none" }}><div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
            <Item style={{ backgroundColor: "#6495ED", color:'black' }}>
           
GST REGISTRATION FREE          
            </Item>
            </div></Link>
           
          </Grid>
          
          <Grid item xs={1} sm={4} md={4}>
          <Link   to="#"
                style={{ color: "black", textDecoration: "none" }}><div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
            <Item style={{ backgroundColor: "#6495ED", color:'black' }}>
              GST FILING UNLIMITED BILLS
            </Item>
            </div>
            </Link>
          </Grid>
          <Grid item xs={1} sm={4} md={4}>

          <Link   to="#"
                style={{ color: "white", textDecoration: "none" }}><div
              className="card  card-img-holder text-black"
            >
            <Item style={{ backgroundColor: "#6495ED", color:'black' }}>
              UDYAM REGISTRATION FREE
            </Item>
            </div>
            </Link>
          </Grid>


          <Grid item xs={1} sm={4} md={4}>

<Link   to="#"
      style={{ color: "white", textDecoration: "none" }}><div
    className="card  card-img-holder text-black"
  >
  <Item style={{ backgroundColor: "#6495ED", color:'black' }}>
    GST BILLING SOFTWARE FREE
  </Item>
  </div>
  </Link>
</Grid>
        </Grid>
      </Box>
               </div>
              </div>
            </div>
          </div>

       <div className="col-md-12 grid-margin">
        <img src={reg} />
       </div>
       
       <div className="col-md-12 grid-margin">
        <img src={service} />
       </div>


          
      </div>

        

      

     
     
    );
  
              }

export default Dashboard;