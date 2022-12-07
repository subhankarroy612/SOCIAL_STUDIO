import { REGISTER } from "./actionTypes";

const initState = {
    count: 0,
    registerState: ''
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {
        case REGISTER:
            return {
                ...state, registerState: action.payload
            }
        default:
            return state;
    }

}