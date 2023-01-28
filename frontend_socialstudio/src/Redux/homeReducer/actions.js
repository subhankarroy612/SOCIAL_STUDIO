import axios from "axios"
import { url } from "../../Components/url";
import { GETPOSTS, SINGLEUSER } from "./actionTypes";

export const getPosts = () => async (dispatch) => {
   let res = await axios.get(url + '/blogs/allPosts');
   dispatch({ type: GETPOSTS, payload: res.data?.reverse() })
}

export const setPosts = (fm, obj, token) => async (dispatch) => {
   try {
      if (fm.get("file")) {
         let res = await axios.post("https://api.cloudinary.com/v1_1/doknlrxsq/image/upload", fm);
         let imageUrl = res.data.secure_url
         await axios.post(url + '/blogs/allPosts', { ...obj, imageUrl }, { headers: { token } });
      } else
         await axios.post(url + '/blogs/allPosts', { ...obj, }, { headers: { token } });
      dispatch(getPosts())
      return true
   } catch (e) {
      console.log(e.message);
   }
}

export const getSingleUser = (id, token) => async (dispatch) => {
   let res = await axios.get(url + '/users/' + id, {
      headers: {
         token
      }
   })
   dispatch({ type: SINGLEUSER, payload: { blogs: res.data.blogs, userDetails: res.data.userDetails } })
}
