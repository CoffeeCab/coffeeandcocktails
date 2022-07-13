import React, { Component } from "react";
class GAuth extends Component {

  render() {

    return (
      <div className="GAuthContainer">
        <p className="register">- or login with -</p>
        <a href="http://localhost:3000/auth/google" className="btn btn-danger"><span className="fa fa-google"></span> SignIn with Google</a>
      </div>
    );
  }
}

export default GAuth;