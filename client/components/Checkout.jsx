import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CheckoutItem from './CheckoutItem.jsx'

let address;
const addressInput = e => {
  address = e.target.value;
  return address;
}

class Checkout extends Component {
    render(){

      const finalCheckoutList = [];

      let totalBill = 0;
        for(let i = 0; i < this.props.drinksList.length; i++){
            try {
                console.log('The unparsed obj value in local storage: ', (localStorage.getItem(JSON.stringify(this.props.drinksList[i].id))))
                console.log('The parsed obj value in local storage: ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))))
                console.log('The total property in local storage: ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).total)
                let totalProperty = JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).total;
                if(parseInt(totalProperty) > 0) {
                  console.log('frog')
                  totalBill += parseInt(totalProperty);
                  finalCheckoutList.push(<CheckoutItem key={i + 'shoppingCartItem'} shoppingCartItem={this.props.drinksList[i]}/>)
                }
            } catch {
              console.log('this.props.drinksList[i].id: ', this.props.drinksList[i].id)
              console.log('no total existed')
          }
        }
        return (
        <div id='checkoutComponent'>
          <h1>Hey this is the checkout</h1>
          <h3>Your total is ${totalBill} USD</h3>
          <br></br>
          <input className='input' id='address' placeholder='Enter address here' onChange={ addressInput }></input>
          <br></br>
          <button onClick={() => localStorage.clear()}>Order (for demo)</button>
          <br></br>
          <Link to='/success'>Click on the button to order your coffee!</Link>
          <br></br>
          <Link to='/login'>Sign out</Link>
          <br></br>
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>
        
        )
    }
}

export default Checkout;

