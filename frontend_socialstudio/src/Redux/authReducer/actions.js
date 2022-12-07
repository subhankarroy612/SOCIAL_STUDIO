import axios from 'axios'
import { REGISTER } from './actionTypes';

export const register = (details) => async (dispatch) => {

    let res = await axios.post('http://localhost:8000/auth/register', details);
    dispatch({ type: REGISTER, payload: res.data })

}