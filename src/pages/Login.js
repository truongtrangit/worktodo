import React, {useState} from "react";
import axios from 'axios'
import { login } from '../utils/index'
import {backend_url, frontend_url} from '../constant/constant'

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
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-26">Welcome</span>
            <span class="login100-form-title p-b-48">
              <i class="zmdi zmdi-font"></i>
            </span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is: a@b.c"
            >
              <input class="input100" type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
              <span class="focus-input100" data-placeholder="Email"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <span class="btn-show-pass">
                <i class="zmdi zmdi-eye"></i>
              </span>
              <input class="input100" type="password" name="pass" onChange={(e) => setPassword(e.target.value)}/>
              <span class="focus-input100" data-placeholder="Password"></span>
            </div>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button class="login100-form-btn" onClick={handleLogin}>Login</button>
              </div>
            </div>

            <div class="text-center p-t-115">
              <span class="txt1">Don’t have an account? </span>
              <a class="txt2" href={frontend_url+`/sign-up`}>
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
