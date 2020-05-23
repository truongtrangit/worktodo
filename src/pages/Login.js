import React, {useState} from "react";
import axios from 'axios'
import { login } from '../utils/index'
import {backend_url, frontend_url} from '../constant/constant'
import { Link } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (e) => {
    e.preventDefault()
    axios.post(`${backend_url}/login`, { email, password })
    .then(result => {
      console.log(result);
      if(result.data.success===true){
        const token = result.data.token
        login(token, result.data.user)
        window.location=`${frontend_url}`        
      } else{
        alert('Wrong email or password. Plz check again!!!')
        // window.location=`${frontend_url}/login` 
      }
    })
  }
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">Welcome</span>
            <span className="login100-form-title p-b-48">
              {/* <i className="zmdi zmdi-font"></i> */}
              <img src='./images/logo.png' style={{ width: '30%', marginBottom: '-5%' }} />
            </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is: a@b.c"
            >
              <input className="input100" type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" type="password" name="pass" onChange={(e) => setPassword(e.target.value)}/>
              <span className="focus-input100" data-placeholder="Password"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={handleLogin}>Login</button>
              </div>
            </div>

            <div className="text-center p-t-115">
              <span className="txt1">Don’t have an account? </span>
              <Link className="txt2" to="/sign-up">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
