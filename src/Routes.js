import React from 'react'
import { Switch,Route } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import RoutesPrivate from './RoutesPrivate'


const Routes=()=>{
    return(
        <Switch>
            <RoutesPrivate loggedIn={true} exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
        </Switch>
    )
}

export default Routes