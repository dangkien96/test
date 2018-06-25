import axios from "axios"
import urlBack from "../config/url"

const params = {
    LIST : function (page, perPage) {
        return {
            page: page,
            perPage: perPage
        }
    },

    CREATE: function () {

    }
}

const actions = {
    LIST: function (params) {
        return axios.get( urlBack.RESTBACKEND + '/categories', {params})
    },
}


export default CategoryService = {
    params, actions
}