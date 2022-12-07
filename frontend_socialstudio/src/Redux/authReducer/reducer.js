import { LOGIN, LOGOUT, REGISTER } from "./actionTypes";

const initState = {
    count: 0,
    registerState: '',
    token: localStorage.getItem('authToken'),
    isAuth: !!localStorage.getItem('authToken'),
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {
        case REGISTER:
            return {
                ...state, registerState: action.payload
            }
        case LOGIN:
            localStorage.setItem('authToken', action.payload)
            return {
                ...state, isAuth: true, token: action.payload, 
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