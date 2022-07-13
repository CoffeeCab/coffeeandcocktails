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
                <p id='price'>${this.props.drinkItem.price}</p>
                <button className="addButton" onClick={() => {
                    console.log('drink card comp. drinkItemID:', this.props.drinkItem.id);
                    // console.log("hey")
                    //If the item already exists in the cart
                    if(localStorage.getItem(JSON.stringify(this.props.drinkItem.id))){
                        // console.log('item found')
                        const itemObjStr = localStorage.getItem(JSON.stringify(this.props.drinkItem.id));
                        const itemObj = JSON.parse(itemObjStr)
                        let newTotal = parseInt(itemObj.total) + 1;
                        // console.log('newTotal: ', newTotal)
                        itemObj.total = newTotal.toString()
                        localStorage.setItem(JSON.stringify(this.props.drinkItem.id), JSON.stringify(itemObj))

                        //Re-render dashboard
                        this.props.rerenderFunction();
                    } 
                    //If it isn't in the cart.
                    else {
                        const itemObj = {
                            id: this.props.drinkItem.id,
                            item: this.props.drinkItem.item,
                            photo: this.props.drinkItem.photo,
                            price: this.props.drinkItem.price,
                            total: '1'
                        }
                        localStorage.setItem(JSON.stringify(this.props.drinkItem.id), JSON.stringify(itemObj));
                        //Re-render dashboard
                        this.props.rerenderFunction();
                    }
                    }}>Add to cart</button>
                <button className="deleteButton" onClick={() => {
                     //If the item already exists in the cart
                     if(parseInt(JSON.parse(localStorage.getItem(JSON.stringify(this.props.drinkItem.id))).total) > 0){
                        console.log('item found')
                        const itemObjStr = localStorage.getItem(JSON.stringify(this.props.drinkItem.id));
                        const itemObj = JSON.parse(itemObjStr)
                        let newTotal = parseInt(itemObj.total) - 1;
                        console.log('newTotal: ', newTotal)
                        itemObj.total = newTotal.toString()
                        localStorage.setItem(JSON.stringify(this.props.drinkItem.id), JSON.stringify(itemObj));
                        //Re-render dashboard
                        this.props.rerenderFunction();
                    } //If it isn't in the cart.
                    else {
                        console.log('No items of this type added to cart.');
                        //Re-render dashboard
                        this.props.rerenderFunction();
                    }
                   }
                   }>Remove from cart</button>
            </div>
        ) 
    }
}

export default DrinkCard;