import axios from "axios"
import { GETPOSTS, SINGLEUSER } from "./actionTypes";

let url = 'http://localhost:8000/'

export const getPosts = () => async (dispatch) => {
   let res = await axios.get('http://localhost:8000/blogs/allPosts');
   console.log(res.data);
   dispatch({ type: GETPOSTS, payload: res.data })
}

export const setPosts = (fm, obj, token) => async (dispatch) => {
   try {
      if (fm.get("file")) {
         let res = await axios.post("https://api.cloudinary.com/v1_1/doknlrxsq/image/upload", fm);
         let imageUrl = res.data.secure_url
         await axios.post('http://localhost:8000/blogs/allPosts', { ...obj, imageUrl }, { headers: { token } });
      } else
         await axios.post('http://localhost:8000/blogs/allPosts', { ...obj, }, { headers: { token } });
      dispatch(getPosts())


   } catch (e) {
      console.log(e.message);
   }
}

export const getSingleUser = (id, token) => async (dispatch) => {
   let res = await axios.get(url + 'users/' + id, {
      headers: {
         token
      }
   })
   console.log(res.data)
   dispatch({ type: SINGLEUSER, payload: { blogs: res.data.blogs, userDetails: res.data.userDetails } })

}
