import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import UserModal from '../Modals/UserModal'
import { UserActions, TypeUserAction } from '../../actions/UserAction'
import { connect } from 'react-redux'
import URL from '../../configs/url'
import { ToastContainer } from 'react-toastify'
import { Notifications } from '../../configs/notification'
import { SweetAlert } from '../../configs/diglog'

export class UserComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.listUser({});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType && nextProps.actionType != TypeUserAction.LIST_ACTION && nextProps.status) {
            if (nextProps.actionType == TypeUserAction.INSERT_ACTION) {
                Notifications.success("Thêm mới người dùng thành công")
            }
            if (nextProps.actionType == TypeUserAction.DELETE_ACTION) {
                Notifications.success("Xóa người dùng thành công")
            }
            if (nextProps.actionType == TypeUserAction.UPDATE_ACTION) {
                Notifications.success("Cập nhật người dùng thành công")
            }
            $(this.userModal).modal('hide')
        }
    }

    showModal(idUser) {
        idUser = idUser ? idUser : 0
        this.props.getInfoUser(idUser)
        $(this.userModal).modal('show')
     }

    checkActive(status) {
        if (status == "AVAILABLE") {
            return (<p className="text-semibold text-info"> Hoạt động</p>)
        } else if (status == "DISABLE") {
            return (<p className="text-semibold text-danger"> Không hoạt động</p>)
        }
    }

    deleteUser (idUser) {
        let that = this
        SweetAlert.confirm("Xóa người dùng", "Bạn có muốn xóa người dùng?",  function (resp){
            if (resp) {
                that.props.deleteUser(idUser)
            }
        }, {})
       
    }

    mapListUser() {
        if (this.props.listUsers && this.props.listUsers.data) {
            return this.props.listUsers.data.map ((user, key) => {
                return (
                    <div key={key} className="col-sm-4 col-md-3">
                        <div className="panel pos-rel">
                            <div className="pad-all text-center">
                                <div className="widget-control">
                                    <div className="btn-group dropdown">
                                        <a href="#" className="dropdown-toggle btn btn-trans"
                                         data-toggle="dropdown"><i className="demo-psi-dot-vertical icon-lg" /></a>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li className="divider" />
                                            <li><a onClick={()=>this.showModal(user.id)} ><i className="icon-lg icon-fw demo-psi-pen-5" /> Sửa</a></li>
                                            <li><a onClick={()=>this.deleteUser(user.id)} ><i className="icon-lg icon-fw demo-pli-recycling" /> Xóa</a></li>
                                            <li><a><i className="icon-lg icon-fw demo-pli-calendar-4" /> Xem chi tiết</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a>
                                    <img alt="Profile Picture" className="img-lg img-circle mar-ver" src={baseUrl + "/Nifty/img/profile-photos/2.png"}/>
                                    <p className="text-lg text-semibold mar-no">{ user.name }</p>
                                    <p className="text-sm">Lập trình viên</p>
                                    <p className="">{user.email}</p>
                                    <p className="">{user.phone}</p>
                                    {this.checkActive(user.status)} 
                                    
                                </a>
                                <div className="pad-top btn-groups">
                                    <a href="#" className="btn btn-icon demo-pli-facebook icon-lg add-tooltip" data-original-title="Facebook" data-container="body" />
                                    <a href="#" className="btn btn-icon demo-pli-twitter icon-lg add-tooltip" data-original-title="Twitter" data-container="body" />
                                    <a href="#" className="btn btn-icon demo-pli-google-plus icon-lg add-tooltip" data-original-title="Google+" data-container="body" />
                                    <a href="#" className="btn btn-icon demo-pli-instagram icon-lg add-tooltip" data-original-title="Instagram" data-container="body" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <div id="page-head">
                    <div id="page-title">
                        <h1 className="page-header text-overflow">Người dùng</h1>
                    </div>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="demo-pli-home"></i>
                        </a></li>
                        <li><a href="#">Người dùng</a></li>
                        <li className="active">Danh sách người dùng</li>
                    </ol>
                    <div id="page-content">
                        <div className="row pad-btm">
                            <div className="col-sm-6 toolbar-left">
                                <button onClick={() => this.showModal()} id="demo-btn-addrow" className="btn btn-purple">
                                    <i className="demo-pli-add" /> Thêm mới</button>
                                <button className="btn btn-default"><i className="demo-pli-printer" /></button>
                            </div>
                        </div>
                        <div className="row">
                            {this.mapListUser()}
                        </div>
                    </div>
                </div>
                <UserModal userModal={el => this.userModal = el}/>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listUsers: state.User.listUsers,
        actionType: state.User.actionType,
        status: state.User.status,
        infoUser: state.User.infoUser,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        listUser: (params) => {
            dispatch(UserActions.getList(params));
        },
        getInfoUser: (idUser) => {
            dispatch(UserActions.getInfo(idUser));
        },
        deleteUser: (idUser)=> {
            dispatch(UserActions.deleteUser(idUser));
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(UserComponent)