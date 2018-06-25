import { put, takeLatest, call } from "redux-saga/effects"
import LoginService from "../services/LoginService"
import {TypeLoginAction} from "../actions/LoginAction"

function* login(action){
    try {
        const data = yield call( LoginService.actions.TodoLogin, action.params)
        yield put({type:TypeLoginAction.LOGIN_ACTION_COMPLETE, data: { status: true, users: data.data }})
    } catch (error) {
        yield put({type:TypeLoginAction.LOGIN_ACTION_COMPLETE, data: { status: false, errors: error.response.data } })
    }
}

export function* TodoLogin() {
    yield takeLatest (TypeLoginAction.LOGIN_ACTION, login);        
}