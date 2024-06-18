import axios from 'axios';
import { server } from '../../server'

export const signup = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_REGISTER_REQUEST' });

        const { data } = await axios.post(`${server}/register`, { name, email, password });

        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('isLoggedIn', 'true'); // Add this line

        console.log('data')
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });

        console.log('error')
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_REQUEST' });

        const { data } = await axios.post(`${server}/login`, { email, password });

        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('isLoggedIn', 'true'); // Add this line
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};