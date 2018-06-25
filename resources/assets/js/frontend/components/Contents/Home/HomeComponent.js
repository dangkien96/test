import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CenterWigets from '../CenterWigets'
import RightWigets from '../RightWigets'
import HeaderComponent from '../../Layouts/HeaderComponent'
import MenuComponent from '../../Layouts/MenuComponent'
import FooterComponent from '../../Layouts/FooterComponent'

export default class HomeComponent extends Component {
    render() {
        return (
        <div id="container" className="effect aside-float aside-bright mainnav-lg">
            <HeaderComponent/>
            <div className="boxed">
                <MenuComponent />
                <section>
		            <div className="container-fluid section-width">
                        <div className="row">
                            <div className="col-xs-12">
                                <CenterWigets/>
                                <RightWigets/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <FooterComponent/>
        </div>
        );
    }
}

