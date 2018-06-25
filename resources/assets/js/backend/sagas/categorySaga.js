import { put, takeLatest, call, take } from "redux-saga/effects"
import CategoryService from "../services/CategoryService"
import typeAction from "../actions/categoryAction"

function* getList(action){
    console.log(action)
    try {
        data = yield call(CategoryService.actions.LIST, action.params);
        yield put({type:"LIST_USER_COMPLETE", payload: data.data})
    } catch (error) {
        yield put({type:"LIST_USER_COMPLETE", payload: []});
    }
}

export function* watchGetCategories() {
    yield takeLatest (typeAction.LIST, infoUser);        
}