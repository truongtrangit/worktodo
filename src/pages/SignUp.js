import React, { useState } from "react";
import axios from "axios";
import { backend_url, frontend_url } from "../constant/constant";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();
    axios
      .post(`${backend_url}/signUp`, { email, password, name })
      .then((result) => {
        console.log(result);
        if (!!result.data._id) {
          window.location = `${frontend_url}/login`;
        } else {
          alert(
            "Cannot create account. Email existed in system. Plz check again!!!"
          );
        }
      });
  };
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">Welcome</span>
            <span className="login100-form-title p-b-48">
              <img
                alt=""
                src="./images/logo.png"
                style={{ width: "30%", marginBottom: "-5%" }}
              />
            </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is: a@b.c"
            >
              <input
                className="input100"
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input
                className="input100"
                type="password"
                name="pass"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="Password"
              ></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className="input100"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="Your Name"
              ></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button
                  className="login100-form-btn"
                  onClick={handleCreateAccount}
                >
                  Create Account
                </button>
              </div>
            </div>

            <div className="text-center p-t-75">
              <span className="txt1">Already have an account? </span>

              <Link className="txt2" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
