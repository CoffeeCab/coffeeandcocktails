import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';

let newUsername;
const newUsernameInput = e => {
  newUsername = e.target.value;
  return newUsername;
}

let newPassword;
const newPasswordInput = e => {
  newPassword = e.target.value;
  return newPassword;
}

class SignUp extends Component {
    render(){
        return (<div className="inputBox">
            <h1>Sign Up Here!</h1>
            <input className="input" id="newUsername" placeholder="Enter Username" onChange={ newUsernameInput }></input>
            <br></br>
            <input className="input" id="newPassword" placeholder="Enter Password" onChange={ newPasswordInput }></input>
            <br></br>
            <button className="loginButton" id="signup" onClick={ () => this.props.onBoxClick(newUsername, newPassword) }>Sign Up</button>
            <br></br>
            <Link to='/dashboard'>Click here to sign up</Link>
            </div>)
    }
}

export default SignUp;