import { LOGIN, LOGOUT, REGISTER, USERDETAILS } from "./actionTypes";

const initState = {
    count: 0,
    registerState: '',
    regState: false,
    logState: false,
    token: localStorage.getItem('authToken'),
    isAuth: !!localStorage.getItem('authToken'),
    userDetails: {},
    loadingUser: false,
    userId: ''
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {
        case REGISTER:
            return {
                ...state, registerState: action.payload,
                regState: action.payload === 'Signup Successful' ? true : false
            }
        case LOGIN:
            if (action.payload !== 'Wrong Credentials')
                localStorage.setItem('authToken', action.payload)
            return {
                ...state, token: action.payload,
                logState: action.payload === 'Wrong Credentials' ? true : false,
                isAuth: action.payload === 'Wrong Credentials' ? false : true,
            }
        case LOGOUT:
            localStorage.removeItem('authToken')
            return {
                ...state, isAuth: false, userDetails: {}
            }
        case USERDETAILS:
            return {
                ...state, userDetails: action.payload, loadingUser: true,
            }
        default:
            return state;
    }

}