import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LoginPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
            </div>
        </Router>
    )
}
