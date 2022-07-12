import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';


class Checkout extends Component {
    render(){
        return (
        <div>
          <h1>Hey this is the checkout</h1>
          <Link to='/success'>Coffee is on its way!</Link>
          <br></br>
          <Link to='/login'>Sign out</Link>
        </div>
        )
    }
}

export default Checkout;