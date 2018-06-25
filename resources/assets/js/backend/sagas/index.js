import { delay } from "redux-saga";
import { all, call, fork } from "redux-saga/effects";
import {TodoLogin} from "./LoginSaga"
import { watchListUser, watchInsertUser, watchInfoUser, watchDeleteUser, watchUpdateUser } from './UserSaga'

//kết hợp các saga về 1 hàm saga duy nhất
export default function* rootSaga(){
    yield all([
        fork(TodoLogin),
        fork(watchListUser),
        fork(watchInfoUser),
        fork(watchInsertUser),
        fork(watchDeleteUser),
        fork(watchUpdateUser),
    ]);
}