import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GAuth from './GAuth.jsx'

let username;
const usernameInput = e => {
  username = e.target.value;
  return username;
}

let password;
const passwordInput = e => {
  password = e.target.value;
  return password;
}

class Login extends Component {

  render() {
    return (
      <div className="inputBox">
        <h1>Welcome to Coffee & Cocktails!</h1>
        <input className="input" id="username" placeholder="Username" onChange={usernameInput} ></input>
        <br></br>
        <input className="input" type="password" id="password" placeholder="Password" onChange={passwordInput}></input>
        <br></br>
        <button className="loginButton" id="login" onClick={() => this.props.onBoxClick(username, password)}>Log In</button>
        <br></br>
        <GAuth />
        <Link to='/signup'>Don't have an account?</Link>
      </div>)
  }
}

export default Login;