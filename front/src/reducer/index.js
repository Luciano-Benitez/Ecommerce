import {ADD_TO_CART, REMOVE_CART, LOGIN_USER, POST_USER,
        LOGOUT, SHIPPING_DATA, SET_PAYMENT_MESSAGE, EMPTY_CART,GET_PRODUCTS} from '../actions/types';

const initialState = {
    allProducts: [],
    ShoppingCart: [],
    User: [],
    ShippingData: {},
    PaymentMessage: '',
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case ADD_TO_CART:
            return {
                ...state,
                ShoppingCart: [...state.ShoppingCart, payload]
            };
        case REMOVE_CART:
            return {
                ...state,
                ShoppingCart: state.ShoppingCart.filter(e => e.id !== payload)
            };

        case EMPTY_CART:
            return {
                ...state,
                ShoppingCart: payload
            };
        
        case LOGIN_USER:
            return {
                ...state,
                User: payload
            };

        case POST_USER:
            return {
                ...state
            };

        case LOGOUT:
            return {
                ...state,
                ShoppingCart:[],
                User: []
            };

        case SHIPPING_DATA:
            return {
                ...state,
                ShippingData: payload
            };

        case SET_PAYMENT_MESSAGE:
            return {
                ...state,
                PaymentMessage: payload
            };

        case GET_PRODUCTS:
            return {
                ...state,
                allProducts: payload
            };

        default:
            return state;
    }
};

export default reducer;
