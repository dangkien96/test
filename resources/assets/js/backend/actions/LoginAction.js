
const LOGIN_ACTION = "LOGIN_ACTION"
const LOGIN_ACTION_COMPLETE = "LOGIN_ACTION_COMPLETE"


const doLogin = (params) => {
    return {
        type: LOGIN_ACTION,
        params: params
    }
}

const doLoginComplete = (params) => {
    return {
        type: LOGIN_ACTION,
        params: params
    }
}


export const TypeLoginAction = {
    LOGIN_ACTION, LOGIN_ACTION_COMPLETE
}

export const LoginActions = {
    doLogin, doLoginComplete
}