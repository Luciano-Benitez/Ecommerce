import {ADD_TO_CART, REMOVE_CART, LOGIN_USER, LOGOUT, SHIPPING_DATA,
        SET_PAYMENT_MESSAGE, EMPTY_CART} from './types';

import {fetchLogin} from '../helpers/search-backend';
import Swl from 'sweetalert2';
import axios from 'axios';

export  const Cart = (objCart) => ({
    type: ADD_TO_CART,
    payload: objCart
});

export  const remove_cart = (id) => ({
    type: REMOVE_CART,
    payload: id
});

export const emptyCart = (e) =>({
    type:EMPTY_CART,
    payload: e
});

export function postUser(payload){
    return async function() {
        const resultPost = await axios.post('http://localhost:3001/postUser', payload);
        return resultPost
    }
};

export const loguin = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const loginUser = (email, password) => {
    return async (dispatch) => {
        const data = await fetchLogin('login',{email, password});
        const body = await data.json();
        if(body.isVerified){
            localStorage.setItem('token: ', body.token);
            dispatch(loguin({id: body.id, email: body.email, name: body.name, role: body.role}))
        } else {
            Swl.fire(`${body.msg}`);
        }
    }
};

const logout = () => ({
    type: LOGOUT
});

export const startLogout = () => {
    return async (dispatch) => {
      localStorage.clear();
      dispatch(logout());
    };
  };

export const shippingData = (data) => ({
        type: SHIPPING_DATA,
        payload: data
});

export const paymentMessage = (msg) => ({
    type: SET_PAYMENT_MESSAGE,
    payload: msg
});