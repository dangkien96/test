import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers/index";
import rootSaga from "../sagas/index";

//tạo middleware
export const sagaMiddleware = createSagaMiddleware();

export default createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
