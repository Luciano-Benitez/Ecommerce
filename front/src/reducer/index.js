import {ADD_TO_CART, REMOVE_CART, LOGIN_USER} from '../actions/types';

const initialState = {
    ShoppingCart: [],
    User: [],
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

        default:
            return state;
    }
};

export default reducer;
