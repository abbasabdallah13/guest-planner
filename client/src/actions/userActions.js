import * as api from '../api'
import { CREATE_USER, END_LOADING, LOGIN, START_LOADING, UPDATE_PASSWORD } from "../constants/constants.js";


export const createUser = userInfo => async(dispatch) => {
    try {
        const { data } = await api.createUser(userInfo);
        dispatch({type: CREATE_USER, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const loginAction = loginInfo => async(dispatch) => {
    try {
        const { data } = await api.login(loginInfo);
        dispatch({type: LOGIN, payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const forgotPasswordAction = email => async(dispatch) => {
    try {
        dispatch({type:START_LOADING})
        const { data } = await api.forgotPassword(email);
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePasswordAction = (id,passwords) => async(dispatch) => {
    try {
        dispatch({type:START_LOADING})
        const { data } = await api.updatePassword(id,passwords);
        dispatch({type: UPDATE_PASSWORD, payload: data})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error.message)
    }
}