import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';


class Success extends Component {
    render(){
        return (
        <div>
          <h1>Woo! Coffee is on it's way!</h1>
          <img src="https://i.pinimg.com/originals/83/bd/f6/83bdf6d9dc0a3639959d7c4af3bf31aa.jpg"/>
          <Link to='/dashboard'>Buy more coffee!</Link>
          <br></br>
          <Link to='/login'>Sign out</Link>
        </div>
        )
    }
}

export default Success;