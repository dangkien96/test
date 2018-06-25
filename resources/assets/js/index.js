import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import URL from "./backend/configs/url"
import URL_FRONTEND from "./frontend/configs/url"
import AdminComponent from './backend/components'
import HomeComponent from './frontend/components'
import LoginComponent from './backend/components/Content/LoginComponent'

export default () => {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path={ URL.URL_ROUTER_ADMIN} component={AdminComponent} />
                    <Route exact path={ URL.URL_ROUTER_ADMIN + 'users'} component={AdminComponent} />
                    <Route exact path={ URL.URL_ROUTER_ADMIN + 'categories'} component={AdminComponent} />
                    <Route exact path={ URL.URL_ROUTER_ADMIN + 'login'} component={LoginComponent} />

                    <Route exact path={ URL_FRONTEND.URL_ROUTE} component={HomeComponent} />
                </div>
            </Router>
        </div>
    )
}