import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from "./index";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./backend/reducers";
import rootSaga from "./backend/sagas";

const sagaMiddleware= createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("example")
)