import "./assets/style.scss";
import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";

const LoginComponent = () => {


  return (
    <div className="container-login container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Login</h1>
          <Link to="/signup">Need an account?</Link>
        </div>
      </div>
      <div className="row">
        <p style={{ fontSize: "12px", textAlign: "center", color: "red" }}>

        </p>
        <div className="col-lg-12">

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    placeholder="Enter email"
                    className="form-control inputs"
                  />
    
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control inputs"
                  />

                </div>

                <div className="text-center">
                  <button className="button-login " type="submit">
                    Login
                  </button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginComponent);
