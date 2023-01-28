import axios from 'axios'
import { REGISTER, LOGIN, LOGOUT, USERDETAILS } from './actionTypes';

export const register = (details, file) => async (dispatch) => {

    try {
        let res = await axios.post('https://api.cloudinary.com/v1_1/doknlrxsq/image/upload', file);
        let avatar = res.data.secure_url

        let re = await axios.post('http://localhost:8000/auth/register', { ...details, avatar });
        dispatch({ type: REGISTER, payload: re.data })
        if (re.data === 'Signup Successful') {
            return true
        } else {
            return false
        }
    } catch (e) {

    }
}

export const login = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8000/auth/login', details);
    if (res.data.token) {
        dispatch({ type: LOGIN, payload: res.data.token, userDetails: [res.data.avatar, res.data.email, res.data.occupation, res.data.name, res.data.location] })
        return true
    } else {
        dispatch({ type: LOGIN, payload: res.data })
        return false
    }
}

export const getUserDetails = (token) => async (dispatch) => {
    let res = await axios.post('http://localhost:8000/auth/userDetails', { token });
    dispatch({ type: USERDETAILS, payload: res.data })
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}