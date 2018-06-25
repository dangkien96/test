import { put, takeLatest, call, take } from "redux-saga/effects"
import axios from "axios"
import { UserActions, TypeUserAction }  from '../actions/UserAction'
import UserService from '../services/UserService'

function* listUser (action){
    try {
        const data = yield call(UserService.actions.ListUser, action.params)
        yield put({type: TypeUserAction.LIST_ACTION_COMPELETE,  params: data.data})
    } catch (error) {
        yield put({type: TypeUserAction.LIST_ACTION_COMPELETE,  params: []})
    }
}

function* insertUser (action) {
    try {
        const data = yield call(UserService.actions.InsertUser, action.params)
        yield put({type: TypeUserAction.INSERT_ACTION_COMPELETE, status: true})
        yield put({type: TypeUserAction.LIST_ACTION})
    } catch (error) {
        yield put({type: TypeUserAction.INSERT_ACTION_COMPELETE, status: false, errors: error.response.data})
    }
}

function* infoUser (action){
    if (action.id != 0) {
        try {
            const data = yield call(UserService.actions.InfoUser, action.id)
            yield put({type: TypeUserAction.INFO_ACTION_COMPELETE, params: data.data})
        } catch (error) {  
            yield put({type: TypeUserAction.INFO_ACTION_COMPELETE, params: {}})
        }
    } else {
        yield put({type: TypeUserAction.INFO_ACTION_COMPELETE, params: {}})
    }

}

function* updateUser (action) {
    try {
        const data = yield call(UserService.actions.UpdateUser, action.id, action.params)
        yield put({type: TypeUserAction.UPDATE_ACTION_COMPELETE, status: true})
        yield put({type: TypeUserAction.LIST_ACTION})
    } catch (error) {
        yield put({type: TypeUserAction.UPDATE_ACTION_COMPELETE, status: false, errors: error.response.data})
    }
}

function* deleteUser (action) {
    try {
        const data = yield call(UserService.actions.DeleteUser, action.params)
        yield put({type: TypeUserAction.DELETE_ACTION_COMPELETE, status: true})
        yield put({type: TypeUserAction.LIST_ACTION})
    } catch (error) {
        yield put({type: TypeUserAction.DELETE_ACTION_COMPELETE, status: false})
    }
}

export function* watchListUser(){
    yield takeLatest(TypeUserAction.LIST_ACTION, listUser)
}

export function* watchInsertUser(){
    yield takeLatest(TypeUserAction.INSERT_ACTION, insertUser)
}

export function* watchInfoUser(){
    yield takeLatest(TypeUserAction.INFO_ACTION, infoUser)
}

export function* watchDeleteUser(){
    yield takeLatest(TypeUserAction.DELETE_ACTION, deleteUser)
}

export function* watchUpdateUser(){
    yield takeLatest(TypeUserAction.UPDATE_ACTION, updateUser)
}