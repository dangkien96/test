import axios from "axios"
import urlBack from "../configs/url"

const params = {
    Login : function (email, password) {
        return {
            email: email,
            password: password
        }
    },
}

const actions = {
    TodoLogin: function (params) {
        return axios.post( urlBack.REST_LOGIN + '/login', params)
    },
}

const LoginService = {
    params, actions
}
export default LoginService 