import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';


class Success extends Component {
    render(){
        return (
        <div>
          <h1>Woo! Coffee is on it's way!</h1>
          <Link to='/dashboard'>Buy more coffee!</Link>
          <br></br>
          <Link to='/login'>Sign out</Link>
        </div>
        )
    }
}

export default Success;