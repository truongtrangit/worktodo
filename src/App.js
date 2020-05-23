import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import WorksManage from "./pages/WorksManage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import _404 from './pages/_404'
import { isLogin } from "./utils/index";

const PrivateRoute = ({ component, isLogin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          React.createElement(component, { ...props })
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

// const privatesRoute = [
//   {
//     name: "WorksManage",
//     component: WorksManage,
//     path: "/",
//     exact: true,
//     isLogin: isLogin(),
//   },
//   {
//     name: "Login",
//     component: Login,
//     path: "/login",
//     exact: true,
//     isLogin: isLogin(),
//   },
//   {
//     name: "SignUp",
//     component: SignUp,
//     path: "/sign-up",
//     exact: true,
//     isLogin: isLogin(),
//   },
// ];

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* {
            privatesRoute.map(item => <PrivateRoute component={item.component} path={item.path} exact={item.exact} isLogin={item.isLogin} />)
          } */}
          {/* <Route path="/login">{isLogin() ? <WorksManage path="/" exact /> : <Login />}</Route> */}
          <Route path="/login">{isLogin() ? <Redirect to={"/"} /> : <Login />}</Route>
          <Route path="/sign-up">
            {isLogin() ? <Redirect to={"/"} />  : <SignUp />}
          </Route>
          <PrivateRoute
            component={WorksManage}
            path="/"
            exact
            isLogin={isLogin()}
          />
          <Route component={_404}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
