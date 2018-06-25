import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import UserService from '../../services/UserService'
import UserComponent from '../Content/UserComponent'
import { UserActions } from '../../actions/UserAction'
import ImageShow from '../../configs/libs/ImageShow'

export class UserModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idUser: 0,
            info: {
                status: "AVAILABLE",
                name: "",
                account: "",
                email: "",
                phone: "",
                avatar: ""
            }
        }
    }

    handeChange(e) {
        this.setState({
            info: {...this.state.info, [e.target.name]: e.target.value }
        })
    }

    save () {
        let status = this.state.info.status
        let name = this.state.info.name
        let account = this.state.info.account
        let email = this.state.info.email
        let phone = this.state.info.phone
        let avatar = this.state.info.avatar
        let params = UserService.params.User(status, name, account, email, phone, avatar)
        if (this.state.idUser == 0) {
            this.props.insertUser(params)
        } else {
            this.props.updateUser(params, this.state.idUser)
        }
    }

    getFile(image) {
        this.setState({
            info: {...this.state.info, avatar: image }
        })
    }

    errorsMap (errors, name) {
        if (errors) {
             return Object.keys(errors).map((key) => {
                 if (key == name) {
                     return ( <p key={key} className="text-left text-danger mt-1"> {errors[key]} </p> )
                 }
             })
        }
     }

    componentWillReceiveProps(nextProps){
        this.setState({
            idUser: nextProps.userInfo.id || 0,
            info: {
                status: nextProps.userInfo.status || "AVAILABLE",
                name: nextProps.userInfo.name || "",
                account: nextProps.userInfo.account || "",
                email: nextProps.userInfo.email || "",
                phone: nextProps.userInfo.phone || "",
                avatar: nextProps.userInfo.avatar || ""
            }
        })
        
    }

    render() {
        return (
            <div className="modal fade" ref={this.props.userModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">
                                Thêm mới
                            </h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal bv-form">
                                <div className="form-group has-feedback">
                                    <label className="col-sm-3 control-label">Tên người dùng: </label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Tên người dùng" className="form-control"
                                            name="name" onChange={(e)=>this.handeChange(e)} value={this.state.info.name}
                                            data-parsley-required-message="Tên người dùng không được bỏ trống"
                                            required />
                                            { this.errorsMap(this.props.errors, "name")}
                                    </div>
                                     
                                </div>

                                <div className="form-group has-feedback">
                                    <label className="col-sm-3 control-label">Tài khoản: </label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Tài khoản" className="form-control"
                                            name="account" required onChange={(e)=>this.handeChange(e)}
                                            value={this.state.info.account}
                                            data-parsley-required-message="Email người dùng không được bỏ trống"
                                        />
                                        { this.errorsMap(this.props.errors, "account")}
                                    </div>
                                </div>

                                <div className="form-group has-feedback">
                                    <label className="col-sm-3 control-label">Số điện thoại: </label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Số điện thoại" className="form-control"
                                            required onChange={(e)=>this.handeChange(e)}
                                            value={this.state.info.phone}
                                            data-parsley-required-message="Số điện thoại người dùng không được bỏ trống"
                                            name="phone" />
                                            { this.errorsMap(this.props.errors, "phone")} 
                                    </div>
                                </div>

                                <div className="form-group has-feedback">
                                    <label className="col-sm-3 control-label">Email: </label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Email" className="form-control"
                                            name="email" required onChange={(e)=>this.handeChange(e)}
                                            value={this.state.info.email}
                                            data-parsley-required-message="Email người dùng không được bỏ trống"
                                        />
                                        { this.errorsMap(this.props.errors, "email")} 
                                    </div>
                                </div>

                                <div className="form-group has-feedback">
                                    <label className="col-sm-3 control-label">Avatar: </label>
                                    <div className="col-sm-8">
                                        <ImageShow renderFile={this.getFile.bind(this)}/>
                                    </div>
                                </div>

                                <div className="form-group has-feedback">
                                    <label className="col-sm-3 control-label">Trạng thái: </label>
                                    <div className="col-sm-8">
                                    <div className="radio">
                                        <input id="avaiable" className="magic-radio"
                                        type="radio" name="status" value="AVAILABLE"
                                        onChange={(e)=>this.handeChange(e)}
                                        checked={this.state.info.status === 'AVAILABLE'} />
                                        <label htmlFor="avaiable">Hoạt động</label>
                                        
                                        <input id="disable" className="magic-radio"
                                         type="radio" name="status" value="DISABLE" 
                                         checked={this.state.info.status === "DISABLE"}
                                         onChange={(e)=>this.handeChange(e)}/>
                                        <label htmlFor="disable" >Không hoạt động</label>
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                            <button type="submit" className="btn btn-primary"
                            onClick={()=>this.save() }
                            >Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.User.infoUser,
        errors: state.User.errors
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        insertUser: (params) => {
            dispatch(UserActions.insertUser(params))
        },
        updateUser: (params, id) => {
            dispatch(UserActions.updateUser(params, id))
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
) (UserModal)



