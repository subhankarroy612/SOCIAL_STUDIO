import { LOGIN, LOGOUT, REGISTER } from "./actionTypes";

const initState = {
    count: 0,
    registerState: '',
    regState: false,
    logState: false,
    token: localStorage.getItem('authToken'),
    isAuth: !!localStorage.getItem('authToken'),
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {
        case REGISTER:
            return {
                ...state, registerState: action.payload,
                regState: action.payload === 'Signup Successful' ? true : false
            }
        case LOGIN:
            localStorage.setItem('authToken', action.payload)
            return {
                ...state, token: action.payload,
                logState: action.payload === 'Wrong Credentials' ? true : false,
                isAuth: action.payload === 'Wrong Credentials' ? false : true
            }
        case LOGOUT:
            localStorage.removeItem('authToken')
            return {
                ...state, isAuth: false,
            }
        default:
            return state;
    }

}