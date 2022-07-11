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
        return (<div>
            <h1>Sign Up Here!</h1>
            <input id="newUsername" placeholder="Enter Username" onChange={ newUsernameInput }></input>
            <br></br>
            <input id="newPassword" placeholder="Enter Password" onChange={ newPasswordInput }></input>
            <br></br>
            <button id="signup" onClick={ () => console.log(`username is '${newUsername}' & password is '${newPassword}'`)}>Sign Up</button>
            <br></br>
            <Link to='/dashboard'>Click here to sign up</Link>
            </div>)
    }
}

export default SignUp;