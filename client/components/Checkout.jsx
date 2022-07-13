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
      let totalItems = 0;
        for(let i = 0; i < this.props.drinksList.length; i++){
            try {
                console.log('The unparsed obj value in local storage: ', (localStorage.getItem(JSON.stringify(this.props.drinksList[i].id))))
                console.log('The parsed obj value in local storage: ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))))
                console.log('The total property in local storage: ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).total)
                let totalProperty = JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).total;
                let priceProperty = JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).price;
                if(parseInt(totalProperty) > 0) {
                  console.log('totalProperty: ', Number(totalProperty))
                  console.log('typeof totalProperty: ', typeof Number(totalProperty))
                  console.log('frog')
                  totalItems += parseInt(totalProperty);
                  totalBill += (Number(totalProperty) * Number(priceProperty))
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
          <h3>There are {totalItems} items in your shopping cart.</h3>
          <h3>Your total bill is ${totalBill} USD</h3>
          <br></br>
          <input className='input' id='address' placeholder='Enter address here' onChange={ addressInput }></input>
          <br></br>
          <Link id='successLink' to='/success'>Click on the button to order your coffee!</Link>
          <br></br>
          <Link id='loginLink' to='/login'>Sign out</Link>
          <br></br>
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
          {finalCheckoutList}
        </div>
        
        )
    }
}

export default Checkout;

