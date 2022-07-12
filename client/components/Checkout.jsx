import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';


class Checkout extends Component {
    render(){
        return (
        <div>
          <h1>Hey this is the checkout</h1>
          {/* //Clear shopping cart after order */}
          <button onClick={() => localStorage.clear()}>Order</button>
          <Link to='/success'>Click on the button to order your coffee!</Link>
          <br></br>
          <Link to='/login'>Sign out</Link>
        </div>
        )
    }
}

export default Checkout;