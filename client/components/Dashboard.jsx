import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DrinkCard from './DrinkCard.jsx'


class Dashboard extends Component {
    constructor(props){
        super(props);  
        this.state = {

        }
    }
    render(){
        const drinkCards = [];

        for(let i = 0; i < this.props.drinksList.length; i++){
            drinkCards.push(<DrinkCard key={i} drinkItem={this.props.drinksList[i]}/>)
        }

        return (
        <div>
          <h1>Hey this is the dashboard/hompage</h1>
          <Link to='/checkout'>Buy your coffee</Link>
          <br></br>
          <Link to='/login'>Sign out</Link>
          <div className="drinksDisplay">
            {drinkCards}
          </div>      
        </div>
        )
    }
}

export default Dashboard;