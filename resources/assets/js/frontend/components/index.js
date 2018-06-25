import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeComponent from './Contents/Home/HomeComponent'

export default () => {
    return (
        <div>
            <HomeComponent/>
            {/* <Switch>
                <Route exact path='/' component={}/>
            </Switch> */}
        </div>
    )
}