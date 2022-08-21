import { Form } from "react-bootstrap";
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {UserAuth } from './AuthContext'
const Signup = () => {
    const [accountCreated, setAccountCreated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      try {
        await createUser(email, password);
        setAccountCreated(true);
    } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    };
    if (accountCreated) {
        return <Redirect to="/login" />;
      }
   
  return (
    <div >
    <div className="d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-6 mx-auto">
          <div className="auth-form-light text-center py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoyDTlclh_13ZN5Fj4Qrv2gKx82Do0IZJ0g&usqp=CAU"
                alt="logo"
              />
              <div>
                <span>
                  {/* <Time /> */}
                </span>
              </div>
            </div>
            <h4>Hello, welcome to ECfile </h4>
            <h6 className="font-weight-light">Sign up for a free account</h6>
            <br />
            <form onSubmit={handleSubmit} >
            <Form.Group className="d-flex search-field">
              <Form.Control
                type="email"
                placeholder="Email..."
                size="lg"
                className="h-auto"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                
                required
              />
            </Form.Group>
            <Form.Group className="d-flex search-field">
              <Form.Control
                type="password"
                placeholder="Password"
                size="lg"
                className="h-auto"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                required
              />
            </Form.Group>
            <div className="mt-3">
              <button
                className="btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div className="or-container">
            <div className="line-separator"></div>
            <div className="or-label">or</div>
            <div className="line-separator"></div>
          </div>
            <div className="pt-3">
              <div className="mb-2">
                <button
                  type="button"
                  className="btn btn-lg btn-social-icon-text btn-google btn-block"
                  style={{ backgroundColor: "#fec107" }}
                 
                >
                  <i
                    className="mdi mdi-google-plus"
                    style={{ backgroundColor: "#fec107" }}
                  ></i>
                  Google
                </button>
                {/* <button type="button" className="btn btn-lg btn-google btn-block text-uppercase btn-outline" onClick={continueWithGoogle}>
                 <img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup