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

let newFirstName;
const newFirstNameInput = e => {
  newFirstName = e.target.value;
  return newFirstName;
}

let newLastName;
const newLastNameInput = e => {
  newLastName = e.target.value;
  return newLastName;
}

let newEmail;
const newEmailInput = e => {
  newEmail = e.target.value;
  return newEmail;
}

let newAddress;
const newAddressInput = e => {
  newAddress = e.target.value;
  return newAddress;
}

let newCity;
const newCityInput = e => {
  newCity = e.target.value;
  return newCity;
}

let newState;
const newStateInput = e => {
  newState = e.target.value;
  return newState;
}

let newZip;
const newZipInput = e => {
  newZip = e.target.value;
  return newZip;
}



class SignUp extends Component {
    render(){
        return (<div className="inputBox">
            <h1>Sign Up Here!</h1>
            <input className="input" id="newUsername" placeholder="Username" onChange={ newUsernameInput }></input>
            <br></br>
            <input className="input" id="newPassword" placeholder="Password" onChange={ newPasswordInput }></input>
            <br></br>
            <input className="input" id="newFirstName" placeholder="First Name" onChange={ newFirstNameInput}></input>
            <br></br>
            <input className="input" id="newLastName" placeholder="Last Name" onChange={ newLastNameInput }></input>
            <br></br>
            <input className="input" id="newEmail" placeholder="E-mail Address" onChange={ newEmailInput }></input>
            <br></br>
            <input className="input" id="newAddress" placeholder="Home Address" onChange={ newAddressInput }></input>
            <br></br>
            <input className="input" id="newCity" placeholder="City" onChange={ newCityInput }></input>
            <br></br>
            <input className="input" id="newState" placeholder="State" onChange={ newStateInput }></input>
            <br></br>
            <input className="input" id="newZip" placeholder="Zip" onChange={ newZipInput }></input>
            <br></br>
            <button className="loginButton" id="signup" onClick={ () => this.props.onSignUpBoxClick(
              newUsername, 
              newPassword, 
              newFirstName, 
              newLastName, 
              newEmail, 
              newAddress, 
              newCity,
              newState,
              newZip ) }>Sign Up</button>
            <br></br>
            </div>)
    }
}

export default SignUp;