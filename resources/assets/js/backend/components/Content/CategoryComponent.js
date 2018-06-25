import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CategoryComponent extends Component {
    constructor (props) {
        super (props)
    }
    showModal () {

    }

    render() {
        return (
            <div>
                <div id="page-head">
                    <div id="page-title">
                        <h1 className="page-header text-overflow">Quản lí loại sản phẩm</h1>
                    </div>
                </div>
                <div id="page-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Sample Toolbar</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="pad-btm form-inline">
                                        <div className="row">
                                            <div className="col-sm-6 table-toolbar-left">
                                                <button id="demo-btn-addrow" className="btn btn-purple">
                                                    <i className="demo-pli-add" 
                                                    onClick={ () => this.showModal() }
                                                    /> Add
                                                </button>
                                                <button className="btn btn-default">
                                                    <i className="demo-pli-printer" />
                                                </button>
                                            </div>
                                            <div className="col-sm-6 table-toolbar-right">
                                                <div className="form-group">
                                                    <input id="demo-input-search2" type="text" placeholder="Search" className="form-control" autoComplete="off" />
                                                </div>
                                                <div className="btn-group">
                                                    <div className="btn-group dropdown">
                                                        <button data-toggle="dropdown" className="btn btn-default dropdown-toggle">
                                                            <i className="demo-pli-gear" />
                                                            <span className="caret" />
                                                        </button>
                                                        <ul role="menu" className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#">Action</a></li>
                                                            <li><a href="#">Another action</a></li>
                                                            <li><a href="#">Something else here</a></li>
                                                            <li className="divider" />
                                                            <li><a href="#">Separated link</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">Số thứ tự</th>
                                                    <th>Tên loại sản phẩm</th>
                                                    <th>Loại sản phẩm cha</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center">Order #53431</td>
                                                    <td>Steve N. Horton</td>
                                                    <td>
                                                        <span className="text-muted">
                                                        <i className="demo-pli-clock" /> Oct 22, 2014
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

