import { GETPOSTS, SINGLEUSER } from "./actionTypes"

const initState = {
    allPosts: [],
    singleUserBlogs: [],
    singleUserDetails: []
}

export const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case GETPOSTS:
            return {
                ...state, allPosts: action.payload
            }
        case SINGLEUSER:
            return {
                ...state, singleUserBlogs: action.payload.blogs,
                singleUserDetails: action.payload.userDetails
            }
        default:
            return state
    }

}