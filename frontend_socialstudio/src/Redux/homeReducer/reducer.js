import { GETPOSTS, SINGLEUSER } from "./actionTypes"

const initState = {
    allPosts: [],
    singleUserBlogs: [],
    singleUserDetails: [],
    loadingSingleUserDetails: false
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
                singleUserDetails: action.payload.userDetails,
                loadingSingleUserDetails: true
            }
        default:
            return state
    }

}