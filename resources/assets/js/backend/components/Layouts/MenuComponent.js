import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import URL from '../../configs/url'

export default class MenuComponent extends Component {
    render() {
        return (
            <nav id="mainnav-container">
                <div id="mainnav">
                    <div id="mainnav-menu-wrap">
                        <div className="nano">
                            <div className="nano-content">
                                <div id="mainnav-profile" className="mainnav-profile">
                                    <div className="profile-wrap text-center">
                                        <div className="pad-btm">
                                            <img className="img-circle img-md" src={ baseUrl +  "/Nifty/img/profile-photos/1.png" } alt="Profile Picture" />
                                        </div>
                                        <a href="#profile-nav" className="box-block" data-toggle="collapse" aria-expanded="false">
                                            <span className="pull-right dropdown-toggle">
                                                <i className="dropdown-caret" />
                                            </span>
                                            <p className="mnp-name">Đạt óc</p>
                                            <span className="mnp-desc">ocdat@gmail.com</span>
                                        </a>
                                    </div>
                                    <div id="profile-nav" className="collapse list-group bg-trans">
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-male icon-lg icon-fw" />Thông tin
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-gear icon-lg icon-fw" /> Cài đặt
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-information icon-lg icon-fw" /> Giúp
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-unlock icon-lg icon-fw" /> Đăng Xuất
                                        </a>
                                    </div>
                                </div>
                                <div id="mainnav-shortcut">
                                    <ul className="list-unstyled shortcut-wrap">
                                        <li className="col-xs-3" data-content="My Profile">
                                            <a className="shortcut-grid" href="#">
                                                <div className="icon-wrap icon-wrap-sm icon-circle bg-mint">
                                                    <i className="demo-pli-male" />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="col-xs-3" data-content="Messages">
                                            <a className="shortcut-grid" href="#">
                                                <div className="icon-wrap icon-wrap-sm icon-circle bg-warning">
                                                    <i className="demo-pli-speech-bubble-3" />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="col-xs-3" data-content="Activity">
                                            <a className="shortcut-grid" href="#">
                                                <div className="icon-wrap icon-wrap-sm icon-circle bg-success">
                                                    <i className="demo-pli-thunder" />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="col-xs-3" data-content="Lock Screen">
                                            <a className="shortcut-grid" href="#">
                                                <div className="icon-wrap icon-wrap-sm icon-circle bg-purple">
                                                    <i className="demo-pli-lock-2" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <ul id="mainnav-menu" className="list-group">
                                    <li className="list-divider" />
                                    <li className="list-header">Danh sách quản lí</li>
                                    <li>
                                        <NavLink to={URL.URL_ROUTER_ADMIN +'users'} activeClassName="active active-sub">
                                            <i className="demo-pli-male" />
                                            <span className="menu-title">Người dùng
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={URL.URL_ROUTER_ADMIN +'categories'} activeClassName="active active-sub">
                                            <i className="demo-pli-receipt-4" />
                                            <span className="menu-title">Loại sản phẩm </span>
                                        </NavLink>
                                    </li>
                                    <li className="list-divider" />
                                </ul>
                                <div className="mainnav-widget">
                                    <div className="show-small">
                                        <a href="#" data-toggle="menu-widget" data-target="#demo-wg-server">
                                            <i className="demo-pli-monitor-2" />
                                        </a>
                                    </div>
                                    <div id="demo-wg-server" className="hide-small mainnav-widget-content">
                                        <ul className="list-group">
                                            <li className="list-header pad-no mar-ver">Trạng thái máy chủ</li>
                                            <li className="mar-btm">
                                                <span className="label label-primary pull-right">15%</span>
                                                <p>CPU sử dụng</p>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar progress-bar-primary" style={{ width: '15%' }}>
                                                        <span className="sr-only">15%</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <span className="label label-purple pull-right">75%</span>
                                                <p>Băng thông</p>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar progress-bar-purple" style={{ width: '75%' }}>
                                                        <span className="sr-only">75%</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pad-ver"><a href="#" className="btn btn-success btn-bock">View Details</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}



