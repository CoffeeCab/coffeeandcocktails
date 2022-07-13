import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DrinkCard from './DrinkCard.jsx'
import CartItem from './CartItem.jsx'
import axios from 'axios';


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
      // console.log(this.state.randomVar)
    }

    render(){
        const drinkCards = [];

        for(let i = 0; i < this.props.drinksList.length; i++){
          // console.log('each item being passed down: ', this.props.drinksList[i])
            drinkCards.push(<DrinkCard key={i} id='drinkItem' drinkItem={this.props.drinksList[i]} rerenderFunction={this.rerenderFunction}/>)
        }

        const shoppingCartList = [];

        //PROBLEM - the id's of the drinks and the id's of the keys are NOT matching
            //Quantities are being added correctly, but 'get'd' incorrectly

          for(let i = 0; i < this.props.drinksList.length; i++){
            // console.log(typeof parseInt(JSON.parse((localStorage.getItem(localStorage.key(i)))).total))
            // console.log('json version of each key/value:', localStorage.getItem(localStorage.key(i)))
            // console.log('parsed version of each key/value:', JSON.parse(localStorage.getItem(localStorage.key(i))))
            // console.log('total of each key/value:', JSON.parse(localStorage.getItem(localStorage.key(i))).total)


            // console.log('drinksList[i]: ', this.props.drinksList[i])

            // console.log('JSON.parse((localStorage.getItem(localStorage.key(i)))): ', JSON.parse((localStorage.getItem(localStorage.key(i)))))
            // console.log('JSON.parse((localStorage.getItem(localStorage.key(i)))): ', JSON.parse((localStorage.getItem(localStorage.key(i)))))
            // console.log('i: ', i)
            try {
              //console.log('LOOK @ THIS JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinkItem.id))))): ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))))
              //console.log('ALSO THIS: JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinkItem.id))))).total: ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id))))).total

               // if(JSON.parse((localStorage.getItem(localStorage.key(i))))){
                // if(JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id))))){

                  // switch of id's happen here
                  // let v = parseInt(JSON.parse((localStorage.getItem(localStorage.key(i)))).total);
                  // let v = parseInt(JSON.parse((localStorage.getItem(localStorage.getItem(`${i}`))).total));
    
                  // if(v){
                  // if(parseInt(JSON.parse((localStorage.getItem(localStorage.key(i)))).total) > 0){
                    // console.log('this ran')


                    console.log('The unparsed obj value in local storage: ', (localStorage.getItem(JSON.stringify(this.props.drinksList[i].id))))
                    console.log('The parsed obj value in local storage: ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))))
                    console.log('The total property in local storage: ', JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).total)

                    let totalProperty = JSON.parse((localStorage.getItem(JSON.stringify(this.props.drinksList[i].id)))).total;

                    if(totalProperty > 0){
                      shoppingCartList.push(<CartItem key={i + 'shoppingCartItem'} id='cartItem' shoppingCartItem={this.props.drinksList[i]}/>)
                    }

              } catch {
              console.log('this.props.drinksList[i].id: ', this.props.drinksList[i].id)
              console.log('no total existed')
            }
          }
           
           
          console.log('drinkCardsArray:', drinkCards);
          console.log('shoppingCartArray:', shoppingCartList);

          const signOut = () => {
            console.log('in signout')
            document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
            window.location=("http://localhost:8080/");
          }

        return (
        <div>
          <div id='dashboardTop'>
            <h1>What would you like to drink?</h1>
            <div id='dashboardLinks'>
              <Link id='checkout' to='/checkout'>Checkout</Link>
              <br></br>
              {/* <Link id='signOut' to='/login'>Sign out</Link> */}
              <button id="signOut" onClick={() => signOut()}> Sign Out </button>
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