import {ADD_TO_CART, REMOVE_CART, LOGIN_USER, LOGOUT, SHIPPING_DATA,
        SET_PAYMENT_MESSAGE, EMPTY_CART, GET_PRODUCTS, LOGIN_ADMIN,
        GET_PRODUCTS_ADMIN} from './types';

import {fetchLogin, fetchRestorePassword, fetchResetPassword} from '../helpers/search-backend';
import {cloudynary} from '../helpers/Cloudinary';
import { useSelector } from 'react-redux';
import Swl from 'sweetalert2';
import axios from 'axios';

export const getProducts = () => {
    return async function(dispatch){
        const result = await axios.get('http://localhost:3001/getProducts');
        return dispatch({
            type: GET_PRODUCTS,
            payload: result.data
        })
    }
};

export  const Cart = (objCart) => ({
    type: ADD_TO_CART,
    payload: objCart
});

export  const remove_cart = (id) => ({
    type: REMOVE_CART,
    payload: id
});

export const emptyCart = () => ({
    type:EMPTY_CART,
});

export const startEmtyCart = () => {
    return async(dispatch) => {
        await dispatch(emptyCart())
    }
};

export function postUser(payload){
    return async function() {
        const resultPost = await axios.post('http://localhost:3001/postUser', payload);
        return resultPost
    }
};
export function postAdmin(payload){
    return async function() {
        const resultPost = await axios.post('http://localhost:3001/postAdmin', payload);
        return resultPost
    }
};

export const loguin = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const loginUser = (email, password) => {
    return async (dispatch) => {
        const data = await fetchLogin('login',{email, password}, 'POST');
        const body = await data.json();
        if(body.isVerified && body.role === 'User'){
            localStorage.setItem('token: ', body.token);
            dispatch(loguin({id: body.id, email: body.email, name: body.name, role: body.role}))
        } else {
            Swl.fire(`${body.msg}`);
        }
    }
};

export const loguinAdm = (admin) => ({
    type: LOGIN_ADMIN,
    payload: admin
});

export const loginAdmin = (email, password) => {
    return async (dispatch) => {
       
        const data = await fetchLogin('loginAdmin',{email, password}, 'POST');
        const body = await data.json();
        if(!body.msg){
            localStorage.setItem('token: ', body.token);
            dispatch(loguinAdm({id: body.id, email: body.email, name: body.name, role: body.role,
                            Profile: body.profile}));
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

export const startRestorePassword = (email) => {
    return async () => {
        try {
            const resp = await fetchRestorePassword(`forgotpassword/?email=${email}`);
            const body = await resp.json();
            if(body.ok){
                Swl.fire(
                    `Reenviamos un correo a su email: ${email}`,
                    "Revise su email para restablecer su contraseña",
                    );
            } else {
                Swl.fire("Error:", body.msg);
              }
        } catch (error) {
            console.log(error);
        }
    }
};

export const resetPassword = (token, password) => {
    return async () => {
      const resp = await fetchResetPassword('resetpassword', {token, password}, 'PUT');
      console.log('resp:', resp);
      const body = await resp.json();
      if (body.ok) {
        Swl.fire(
          "Contraseña restaurada.",
          "Ya puede iniciar sesión con su nueva contraseña.",
        );
      } else {
        Swl.fire('El enlace ya no es valido, confirme que sea el link que ha recibido por correo');
      }
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

export const uploadImageCloud = (formData) => {
    return async () => {
      const resp = await cloudynary(formData);
      const body = await resp.data.secure_url;
      return body;
    };
};

export const getProductsAdmin = (id) => {
    return async function(dispatch){
        // const idAdm = useSelector(state => state.User.id);
        const result = await axios.get('http://localhost:3001/getProductsForAdm/',{id});
        console.log('result:', result);
        const allProducts = result.data;
        return dispatch({
            type: GET_PRODUCTS_ADMIN,
            payload: allProducts
        })
    }
};


  