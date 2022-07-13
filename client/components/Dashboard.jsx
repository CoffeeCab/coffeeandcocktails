import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DrinkCard from './DrinkCard.jsx'
import CartItem from './CartItem.jsx'


class Dashboard extends Component {
    constructor(props){
        super(props);  
        this.state = {
            randomVar: true
        }
        this.rerenderFunction = this.rerenderFunction.bind(this);
    }

    // Reinacting a react hook
    rerenderFunction(){

      this.setState({
        randomVar: !this.state.randomVar
            })
    }

    render(){
        const drinkCards = [];

        for(let i = 0; i < this.props.drinksList.length; i++){
            drinkCards.push(<DrinkCard key={i} id='drinkItem' drinkItem={this.props.drinksList[i]} rerenderFunction={this.rerenderFunction}/>)
        }

        const shoppingCartList = [];

        //PROBLEM - the id's of the drinks and the id's of the keys are NOT matching
            //Quantities are being added correctly, but 'get'd' incorrectly

          for(let i = 0; i < this.props.drinksList.length; i++){
            try {

                    let totalProperty = JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).total;

                    if(totalProperty > 0){
                      shoppingCartList.push(<CartItem key={i + 'shoppingCartItem'} id='cartItem' shoppingCartItem={this.props.drinksList[i]}/>)
                    }

              } catch {
              console.log('this.props.drinksList[i].id: ', this.props.drinksList[i].id)
              console.log('no total existed')
            }
          }
        return (
        <div>
          <div id='dashboardTop'>
            <h1>What would you like to drink?</h1>
            <div id='dashboardLinks'>
              <Link id='checkout' to='/checkout'>Checkout</Link>
              <br></br>
              <Link id='signOut' to='/'>Sign out</Link>
            </div>
          </div>
          <div className="drinksDisplay">
            {drinkCards}
          </div> 
          <div className="dashboardCartDisplay">
            {shoppingCartList}
          </div>     
        </div>
        )
    }
}

export default Dashboard;