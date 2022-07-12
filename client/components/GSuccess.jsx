import React, { Component } from "react";

class GSuccess extends Component {
  render() {
    return (
      <div className="GSuccessContainer">
        <div className="profileinfo">
          <h1 className="profileinfoheader"><span className="fa fa-user"></span> Profile Information</h1>
          <div className="well">
            <p>
                <span><strong>Id:</strong> { user.id }</span>
                <span><strong>Email:</strong> { user.emails[0].value }</span>
                <span><strong>Name:</strong> { user.displayName }</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GSuccess;
