import { SET_PRODUCTS, SET_INITIAL_PRODUCTS } from "../actions";

const initialState = {
    initialProducts: [],
    products: [],
    filters: {
        search: '',
        category: 'all',
        shipping: 'all',
        minPrice: 0,
        maxPrice: 1000,
        minRating: 0,
        maxRating: 0
    }
}

const ProductsReducers = (state = initialState, action) => {
    switch (action.type)
    {
        case SET_INITIAL_PRODUCTS:
            return {
                ...state,
                initialProducts: action.payload,
                products: action.payload
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default ProductsReducers