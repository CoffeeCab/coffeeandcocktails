import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';


class DrinkCard extends Component {
    constructor(props){
        super(props);  
        this.state = {

        }
    }

    render(){
        return (
            <div className="drinkCard">
                <h1>{this.props.drinkItem.item}</h1>
                <img className="drinkImg" src={this.props.drinkItem.photo}></img>
                <p>${this.props.drinkItem.price}</p>
                <button>Add to cart</button>
            </div>
        ) 
    }
}

export default DrinkCard;