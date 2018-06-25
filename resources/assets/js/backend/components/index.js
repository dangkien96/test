import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MenuComponent from './Layouts/MenuComponent'
import HeaderComponent from './Layouts/HeaderComponent'
import FooterComponent from './Layouts/FooterComponent'
import UserComponent from './Content/UserComponent'
import LoginComponent from './Content/LoginComponent'
import CategoryComponent from './Content/CategoryComponent'
import URL from '../configs/url'

export default class AdminComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="container" className="effect aside-float aside-bright mainnav-lg">
                <HeaderComponent/>
                <div className="boxed">
                    <div id="content-container">
                        <Route path={URL.URL_ROUTER_ADMIN+'users'} component={UserComponent} />
                        <Route path={URL.URL_ROUTER_ADMIN+'categories'}  component={CategoryComponent} />
                    </div>
                    <MenuComponent/>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}