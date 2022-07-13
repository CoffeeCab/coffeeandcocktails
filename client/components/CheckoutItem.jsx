import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';


class CheckoutItem extends Component {
    constructor(props){
        super(props);  
        this.state = {

        }
    }

    render(){
        // console.log('jhey')
        console.log('shoppingCartComponent:', this.props.shoppingCartItem);
        // console.log('shoppingCartItemID: ', this.props.shoppingCartItem.id);
        return (
            <div className="cartItem">
              <h3>{this.props.shoppingCartItem.item}</h3>
              <p>{'Quantity Ordered: ' + parseInt(JSON.parse((localStorage.getItem(JSON.stringify(this.props.shoppingCartItem.id)))).total)}</p>
              <p>{'Price: $' + this.props.shoppingCartItem.price}</p>
            </div>
        ) 
    }
}

export default CheckoutItem;