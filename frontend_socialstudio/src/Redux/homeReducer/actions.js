import axios from "axios"
import { GETPOSTS } from "./actionTypes";


export const getPosts = () => async (dispatch) => {
   let res = await axios.get('http://localhost:8000/blogs/allPosts');
   dispatch({type: GETPOSTS, payload: res.data})
}