import { combineReducers } from "redux";
import userReducer from './user.js'
import loaderReducer from './loader.js'

export const reducers = combineReducers({
    user: userReducer,
    loader: loaderReducer
})