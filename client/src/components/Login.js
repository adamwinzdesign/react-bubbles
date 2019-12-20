import React from "react";

import axiosWithAuth from './axiosWithAuth';
import { render } from "react-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render() {
    return (
      <div>
        <h1>Welcome to the Bubble App!</h1>
      </div>
    )
  }
};

export default Login;
