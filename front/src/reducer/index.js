import {ADD_TO_CART, REMOVE_CART} from '../actions/types';

const initialState = {
    ShoppingCart: [],
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

        default:
            return state;
    }
};

export default reducer;
