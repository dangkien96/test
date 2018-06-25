import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import URL_F from '../../configs/url'


export default class HeaderComponent extends Component {
    render() {
        return (
            <header className="container-fluid">
                <div className="row">
                    <div id="banner">
                        <div className="banner-left col-xs-7"><img src={URL_F.URL_IMAGE_DEFAULT + "image/header-logo.png"} className="img-responsive" alt="logo" /></div>
                        <div className="banner-right col-xs-5">
                            <div className="row text-right header-lang">
                                <div className="row">
                                    <a href className="header-vn"><i>Tiếng Việt</i></a>
                                    |<a href className="header-vn"><i>Tiếng Anh</i></a>
                                </div>
                            </div>
                            <div className="clearfix">
                            </div>
                            <div className="header-phone col-xs-6">
                                <a href title><img src={URL_F.URL_IMAGE_DEFAULT + "image/header-phone.png"} className="img-responsive" alt="phone" /></a>
                            </div>
                            <div className="header-ques col-xs-6">
                                <a href title><img src={URL_F.URL_IMAGE_DEFAULT + "image/header-ques.png"} className="img-responsive" alt="question" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

