import { TypeLoginAction } from '../actions/LoginAction'
import URL from "../configs/url"

const initialState = {
    stateLogin: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case TypeLoginAction.LOGIN_ACTION_COMPLETE:
            if (action.data.status) {
                window.location.href = URL.REST_LOGIN;
            }
            return {...state, stateLogin: action.data }
        case "Logout":
        default:
            return state;
    }
}