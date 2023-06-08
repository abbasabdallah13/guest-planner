import { CREATE_USER, LOGIN, UPDATE_PASSWORD } from "../constants/constants";

const userReducer = (userState = { loggedUser: {}, loginErrorMessage: '', signupErrorMessage: '', updatePasswordErrorMessage: '', passUpdatedUser:{} }, action) => {
    switch(action.type){
        case CREATE_USER:
            if(action.payload.errorMessage){
                return { ...userState, signupErrorMessage:action.payload.errorMessage }
            }else{
                return { ...userState, loggedUser:action.payload, signupErrorMessage:'' }
            }
        case LOGIN:
            if(action.payload.errorMessage){
                return { ...userState, loginErrorMessage:action.payload.errorMessage }
            }else{
                return { ...userState, loggedUser:action.payload, loginErrorMessage:'' }
            }
        case UPDATE_PASSWORD:
            if(action.payload.errorMessage){
                return {...userState, updatePasswordErrorMessage: action.payload.errorMessage }
            }else{
                return { ...userState, passUpdatedUser: action.payload}
            }
        default:
            return userState
    }
}

export default userReducer