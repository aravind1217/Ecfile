import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import '../index.css'
import Layout from "../Hocs/Layout";

class App extends Component {
  render() {
    return (
      <div>
       
          <Layout />
        
      </div>
    );
  }
}
export default withRouter(App);
