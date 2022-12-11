import { GETPOSTS } from "./actionTypes"

const initState = {
    allPosts: []
}

export const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case GETPOSTS:
            return {
                ...state, allPosts: action.payload
            }
        default:
            return state
    }

}