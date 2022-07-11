import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

    render(){
        return (
        <div>
          <h1>Welcome to Coffee & Cocktails!</h1>
          <input id="username" placeholder="Username" onChange={ usernameInput }></input>
          <br></br>
          <input type="password" id="password" placeholder="Password" onChange={ passwordInput }></input>
          <br></br>
          <button id="login" onClick={ () => console.log(`username is '${username}' & password is '${password}'`)}>Log In</button>
          <br></br>
          <Link to='/signup'>Don't have an account?</Link>
        </div>)
    }
}

export default Login;