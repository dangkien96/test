import { combineReducers } from "redux"
import User from "./UserReducer"
import Category from "./CategoriesReducer"
import Login from "./LoginReducer"
export default combineReducers({
    User, Category, Login
})