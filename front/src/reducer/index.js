import {ADD_TO_CART, REMOVE_CART, LOGIN_USER, LOGIN_ADMIN, POST_USER, POST_ADMIN,
        LOGOUT, SHIPPING_DATA, SET_PAYMENT_MESSAGE, EMPTY_CART,GET_PRODUCTS,
        GET_PRODUCTS_ADMIN, PUT_PROFILE, PUT_NAME_ADM, PUT_PASSWORD_ADM,
        GET_PRODUCT_FOR_ID, PUT_NAME_PRODUCT, PUT_PRODUCT_TYPE, PUT_PRICE_PRODUCT,
        PUT_RATING_PRODUCT, PUT_DESCRIPTION_PRODUCT, PUT_IMAGE_PRODUCT} from '../actions/types';

const initialState = {
    allProducts: [],
    ShoppingCart: [],
    User: [],
    UserProducts: [],
    ShippingData: {},
    PaymentMessage: '',
    ProductEdit: [],
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
                ShoppingCart: [],
            };
        
        case LOGIN_USER:
            return {
                ...state,
                User: payload
            };

        case LOGIN_ADMIN:
            return {
                ...state,
                User: payload
            };

        case POST_USER:
            return {
                ...state,
            };
        
        case PUT_PROFILE:
            return {
                ...state,
                User: payload
            };

        case POST_ADMIN:
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

        case GET_PRODUCTS_ADMIN:
            return {
                ...state,
                UserProducts: payload
            };

        case PUT_NAME_ADM:
            return {
                ...state,
                User: payload
            };
        
        case PUT_PASSWORD_ADM: 
            return {
                ...state,
                User: payload
            };
        
        case GET_PRODUCT_FOR_ID:
            return {
                ...state,
                ProductEdit: payload
            };

        case PUT_NAME_PRODUCT:
            return {
                ...state,
                ProductEdit: payload
            };

        case PUT_PRODUCT_TYPE:
            return {
                ...state,
                ProductEdit: payload
            };

        case PUT_PRICE_PRODUCT:
            return {
                ...state,
                ProductEdit: payload
            };

        case PUT_RATING_PRODUCT:
            return {
                ...state,
                ProductEdit: payload
            };

        case PUT_DESCRIPTION_PRODUCT:
            return {
                ...state,
                ProductEdit: payload
            };

        case PUT_IMAGE_PRODUCT:
            return {
                ...state,
                ProductEdit: payload
            };

        default:
            return state;
    }
};

export default reducer;
