import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';

const RoutesPrivate=({loggedIn,component:Component,...rest})=>(

    <Route {...rest} render={(props)=>(
        loggedIn ?(
            <Component {...props} />
        ):(
            <Redirect to="/login" />
        )
    )}/>
)


const mapsState=()=>{
    return {

    }
}

export default RoutesPrivate;