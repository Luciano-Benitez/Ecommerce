import {ADD_TO_CART, REMOVE_CART, LOGIN_USER, POST_USER, LOGOUT, SHIPPING_DATA} from '../actions/types';

const initialState = {
    ShoppingCart: [],
    User: [],
    ShippingData: {},
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
                ShippingData: {...state.ShippingData, payload}
            };

        default:
            return state;
    }
};

export default reducer;
