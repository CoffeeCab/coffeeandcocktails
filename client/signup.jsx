import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp.jsx';
import LoginPage from './Login.jsx';
import './stylesheets/styles.scss';

class App extends Component { 
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
,        }
    }

    render(){
        return (
            <div className="router">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<LoginPage></LoginPage>}
                    />
                    <Route
                        exact
                        path="/signUp"
                        element={<SignUp></SignUp>}
                    />
                    <Route
                        exact
                        path="/dashboard"
                        element={<SignUp></SignUp>}
                    />
                    <Route
                        exact
                        path="/checkoutPage"
                        element={<SignUp></SignUp>}
                    />
                </Routes>
            </div>
        )
    }
}