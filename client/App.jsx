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
                id: '0',
                item: 'Starbucks Iced Coffee',
                photo: 'https://www.tastingtable.com/img/gallery/the-absolute-best-starbucks-iced-coffee-drinks-ranked/intro-1645739811.jpg',
                price: '26',
                total: '0'
                },
                {
                id: '1',
                item: 'Margarita',
                photo: 'https://images.absolutdrinks.com/drink-images/Raw/Absolut/c8bc404c-fc30-4ec8-a9a5-0dca3913bbbb.jpg',
                price: '12',
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
                price: '0.50',
                total: '0'
                },
                {
                id: '4',
                item: 'Caffe Mocha',
                photo: 'https://www.caffesociety.co.uk/assets/recipe-images/mocha-small.jpg',
                price: '11',
                total: '0'
                },
                {
                id: '5',
                item: 'Iced McCafe Latte (please sponsor us)',
                photo: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-iced-latte-1:1-3-product-tile-desktop?wid=765&hei=472&dpr=off',
                price: '8',
                total: '0'
                },
                {
                id: '6',
                item: 'Jenna\'s Jungle Juice',
                // photo: 'https://i5.walmartimages.com/asr/4a9cbbb8-16b9-48a0-b7ea-a38ed2e722c9_1.336fd305c7db00402ef810d3ed0fc443.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
                photo: 'https://i5.walmartimages.com/asr/4a9cbbb8-16b9-48a0-b7ea-a38ed2e722c9_1.336fd305c7db00402ef810d3ed0fc443.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
                price: '140',
                total: '0'
                },
                {
                id: '7',
                item: 'Ryan McDaddy',
                photo: 'https://static.vecteezy.com/system/resources/previews/005/476/277/non_2x/under-18-forbidden-round-icon-sign-illustration-eighteen-or-older-persons-adult-content-18-plus-only-rating-isolated-on-white-background-free-vector.jpg',
                price: '69',
                total: '0'
                },
                {
                id: '8',
                item: 'Inflation Hydration',
                photo: 'https://imageio.forbes.com/specials-images/imageserve/6063683bb1ca638d7f7b69f8/Businessman-inflating-dollar-sign-balloon-with-tire-pump/960x0.jpg?format=jpg&width=960',
                price: '3000',
                total: '0'
                },
                {
                id: '9',
                item: 'Laura, get me a bottle',
                photo: 'https://www.clearviewtreatment.com/wp-content/uploads/2016/11/iStock_12143618_LARGE.jpg',
                price: '12',
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

    componentDidMount(){
        for(let i = 0; i < this.state.drinksList.length; i++){
            let drinkItem = this.state.drinksList[i]
            // console.log(drinkItem)
            let drinkId = drinkItem.id;
            const itemObj = {
                id: drinkItem.id,
                item: drinkItem.item,
                photo: drinkItem.photo,
                price: drinkItem.price,
                total: '0'
            };
            localStorage.setItem(JSON.stringify(drinkId), JSON.stringify(itemObj));
        }
    }

    onBoxClick = (e1, e2) => {
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
                        element={<Checkout drinksList={this.state.drinksList}/>}
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