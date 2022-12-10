import axios from 'axios'
import { REGISTER, LOGIN, LOGOUT } from './actionTypes';

export const register = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8000/auth/register', details);
    dispatch({ type: REGISTER, payload: res.data })
}

export const login = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8000/auth/login', details);
    if (res.data.token)
        dispatch({ type: LOGIN, payload: res.data.token, userDetails: [res.data.avatar, res.data.email, res.data.occupation, res.data.name, res.data.location] })
    else
        dispatch({ type: LOGIN, payload: res.data })
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}