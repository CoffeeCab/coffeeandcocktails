import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';


class CartItem extends Component {
    constructor(props){
        super(props);  
        this.state = {

        }
    }

    render(){
        console.log('jhey')
        return (
            <div className="cartItem">
              <h3>{this.props.cartItem.item}</h3>
              <p>{'Quantity Ordered:' + this.props.cartItem.total}</p>
              <p>{'Price:' + this.props.cartItem.price}</p>
            </div>
        ) 
    }
}

export default CartItem;