import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Dashboard from './components/Dashboard.jsx';
import Checkout from './components/Checkout.jsx';
import Success from './components/Success.jsx';
import './styles.scss';

class App extends Component { 
    constructor(props){
        super(props);
        this.state = {
            currentUser: {
                id: '',
                user: '',
                password: ''
            }, 
            randomVar: true,
            //Note! The browser's Local Storage can only store strings. So make sure id, price, & item are strings.
            drinksList: [ 
                {
                id: '1',
                item: 'Starbucks Iced Coffee',
                photo: 'https://www.tastingtable.com/img/gallery/the-absolute-best-starbucks-iced-coffee-drinks-ranked/intro-1645739811.jpg',
                price: '26',
                total: '0'
                },
                {
                id: '2',
                item: 'Cookie Cake Cocktail',
                photo: 'https://i.pinimg.com/originals/d6/c5/35/d6c535f8bfa8497e0525e356d25efb65.jpg',
                price: '15',
                total: '0'
                },
                {
                id: '3',
                item: 'Black Coffee',
                photo: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/29/19/asset/buzzfeed-prod-fastlane-01/sub-buzz-12062-1498777435-1.jpg',
                price: '0.5',
                total: '0'
                },
            ]
        }
        // this.usernameInput = this.usernameInput.bind(this);
        // this.passwordInput = this.passwordInput.bind(this);
    }

    // componentDidMount(){
    //     for(let i = 0; i < this.state.drinksList.length; i++){
    //         localStorage.setItem(this.state.drinksList[i].id, JSON.stringify(this.state.drinksList[i]))
    //     }
    // }

    // addItem = (e, itemId, itemObj) => {
    //     let newDrinksList = this.state.drinksList 

    //     const replacementObj = {};

    //     Object.assign(newDrinksList[itemId], itemObj)

    //     this.setState({
    //         drinksList: drinksList(0)
    //     })
    // }
      
    // usernameInput = e => {
    //     this.state.currentUser.user = e.target.value;
    //     return this.state.currentUser.username;
    //   }
      
    // passwordInput = e => {
    //     this.state.currentUser.password = e.target.value;
    //     return this.state.currentUser.password;
    //   }  

    onBoxClick = (e1, e2) => {
        console.log('user:', e1, 'pass:', e2);
            this.setState({ currentUser: {
                user: e1,
                password: e2
            } 
        })
    }

    render(){
        return (
            <div className="router">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<LoginPage user={this.state.currentUser.user} pass={this.state.currentUser.password} onBoxClick={this.onBoxClick} />}
                    />
                    <Route
                        exact
                        path="/signUp"
                        element={<SignUp newUser={this.state.currentUser.user} newPass={this.state.currentUser.password} onBoxClick={this.onBoxClick} />}
                    />
                    <Route
                        exact
                        path="/dashboard"
                        element={<Dashboard userInfo={this.state.currentUser} drinksList={this.state.drinksList} addToCart={this.addToCart} randomVar={this.state.randomVar}/>}
                    />
                    <Route
                        exact
                        path="/checkout"
                        element={<Checkout/>}
                    />
                     <Route
                        exact
                        path="/success"
                        element={<Success/>}
                    />
                </Routes>
            </div>
        )
    }
}

export default App;