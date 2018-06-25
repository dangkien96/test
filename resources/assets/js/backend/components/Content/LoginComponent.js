import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { LoginActions }  from '../../actions/LoginAction'
import LoginService from "../../services/LoginService"
import { withFormik } from "formik"
import DatePickerInput from "../../configs/libs/datePicker"
import Yup from 'yup'

export class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            setupDatepicker: {
                format:"dd/mm/yyyy",
                todayHighlight: true,
                language: "vi",
            }
        }
    }

    handeChange(e) {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    todoLogin  () {
        var params = LoginService.params.Login(this.state.email, this.state.password)
        this.props.todoLogin(params)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.dataLogin.errors) {
        }
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
    datePickerChange (value) {
        console.log(value);
    }

    render() {
        return (
            <div>
                <div className="cls-content-sm panel">
                    <div className="panel-body" style={{background: '#fff'}}>
                        <div className="mar-ver pad-btm">
                            <h1 className="h3">Đăng nhập trang quản trị</h1>
                            <p>Đăng nhập bằng tài khoản</p>
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" autoFocus
                                 placeholder="Email" value={this.state.email}  onChange={ (e) => this.handeChange(e) } />
                                { this.errorsMap(this.props.dataLogin.errors, "email")}
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password"
                                 placeholder="Mật khẩu" value={this.state.password} onChange={ (e) => this.handeChange(e) }/>
                                { this.errorsMap(this.props.dataLogin.errors, "password")} 
                            </div>

                            <div className="form-group">
                                <DatePickerInput 
                                setDatePicker= { this.state.setupDatepicker }
                                onChangeValue={this.datePickerChange} />
                            </div>

                            <div className="checkbox pad-btm text-left">
                                <input id="demo-form-checkbox" className="magic-checkbox" type="checkbox" />
                                <label htmlFor="demo-form-checkbox">Nhớ đăng nhập</label>
                            </div>
                            
                            <button className="btn btn-primary btn-lg btn-block" 
                                onClick={() => this.todoLogin()}
                                type="button">Đăng nhập</button>
                        </form>
                    </div>
                    <div className="pad-all" style={{background: '#fff'}}>
                        <a href="pages-password-reminder.html" className="btn-link mar-rgt">Lấy lại mật khẩu?</a>
                        <div className="media pad-top bord-top">
                            <div className="float-right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps (state) {
    return {
        dataLogin: state.Login.stateLogin,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        todoLogin: (params) => {
            dispatch(LoginActions.doLogin(params));
        },
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
) (LoginComponent)



