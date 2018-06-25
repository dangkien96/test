import axios from "axios"
import urlBack from "../configs/url"

const params = {
    User : function (status, name, account, email, phone, avatar) {
        var params = new FormData()
        params.append("email", email);
        params.append("name", name);
        params.append("status", status);
        params.append("account", account);
        params.append("phone", phone);
        params.append("avatar", avatar);
        
        return params;
    },
}

const actions = {
    ListUser: function (params) {
        return axios.get(urlBack.RESTBACKEND + '/users', {params})
    },

    InfoUser: function (params) {
        return axios.get(urlBack.RESTBACKEND + '/users/' + params)
    },
    
    InsertUser: function (params) {
        let config = {
            headers : {
                'Content-Type': undefined,
                'processData': false,
                'contentType': false
            }
        } 
        return axios.post( urlBack.RESTBACKEND + '/users', params, config)
    },

    UpdateUser: function (id, params) {
        return axios.post( urlBack.RESTBACKEND + '/users/' + id, params)
    },

    DeleteUser: function (params) {
        return axios.delete(urlBack.RESTBACKEND + '/users/' + params)
    },
}

const UserService = {
    params, actions
}
export default UserService 