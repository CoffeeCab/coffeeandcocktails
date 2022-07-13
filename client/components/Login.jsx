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
      if (document.cookie) {
        //WHy aer we resetting user? :(
            // document.cookie = "firstName=John; lastName=Smith;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"
        const cookieArr = document.cookie.split(';')
        let userFirst;
        let userLast;
        console.log('cookie');
        cookieArr.forEach(cookie => {
            if (cookie.includes('firstName')) userFirst = cookie.split('=')[1];
            if (cookie.includes('lastName')) userLast = cookie.split('=')[1];
        })
        this.setState({
            currentUser: {
                firstName: userFirst,
                lastName: userLast
            }
        })
        window.location = "http://localhost:8080/dashboard";
    }
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
      </div>
    )
  }
}

export default Login;