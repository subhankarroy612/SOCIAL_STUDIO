import axios from 'axios'
import url from '../../Components/url';
import { REGISTER, LOGIN, LOGOUT, USERDETAILS } from './actionTypes';

export const register = (details, file) => async (dispatch) => {

    try {
        let res = await axios.post('https://api.cloudinary.com/v1_1/doknlrxsq/image/upload', file);
        let avatar = res.data.secure_url

        let re = await axios.post(url+'/auth/register', { ...details, avatar });
        dispatch({ type: REGISTER, payload: re.data })
    } catch (e) {

    }
}

export const login = (details) => async (dispatch) => {
    let res = await axios.post(url+'/auth/login', details);
    if (res.data.token)
        dispatch({ type: LOGIN, payload: res.data.token, userDetails: [res.data.avatar, res.data.email, res.data.occupation, res.data.name, res.data.location] })
    else
        dispatch({ type: LOGIN, payload: res.data })
}

export const getUserDetails = (token) => async (dispatch) => {
    let res = await axios.post(url+'/auth/userDetails', { token });
    dispatch({ type: USERDETAILS, payload: res.data })
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}