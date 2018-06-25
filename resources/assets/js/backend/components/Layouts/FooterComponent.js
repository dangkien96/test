import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FooterComponent extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="show-fixed pad-rgt pull-right">
                    You have <a href="#" className="text-main"><span className="badge badge-danger">3</span> pending action.</a>
                </div>
                <div className="hide-fixed pull-right pad-rgt">
                    14GB of <strong>512GB</strong> Free.
                </div>
                <p className="pad-lft">© 2017 Your Company</p>
            </footer>
        );
    }
}