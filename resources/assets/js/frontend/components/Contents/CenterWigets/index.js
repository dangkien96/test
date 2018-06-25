import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ColColSubComponent from './ColColSubComponent'
import TwoColComponent from './TwoColComponent'
import ThreeColComponent from './ThreeColComponent'
import SubComponent from './SubComponent'

export default class CenterWigets extends Component {
    render() {
        return (
            <div className="col-xs-8 question">
                <ColColSubComponent/>
                <div className="clear-fix"> 
                </div>
                <TwoColComponent/>
                <div className="clear-fix"> 
                </div>
                <ThreeColComponent/>
                <div className="clear-fix"> 
                </div>
                <SubComponent/>
            </div>
        );
    }
}



