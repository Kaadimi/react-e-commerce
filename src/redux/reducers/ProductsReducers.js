import { SET_PRODUCTS, SET_INITIAL_PRODUCTS, SET_SEARCH } from "../actions";

const initialState = {
    initialProducts: [],
    products: [],
    filters: {
        search: '',
        category: 'all',
        shipping: 'all',
        minPrice: 0,
        maxPrice: 500,
        minRating: 0
    }
}

const ProductsReducers = (state = initialState, action) => {
    switch (action.type)
    {
        case SET_SEARCH:
            console.log("searching")
            return {
                ...state,
                filters: {...state.filters, search: action.payload}
            }
        case SET_INITIAL_PRODUCTS:
            return {
                ...state,
                initialProducts: action.payload
            }
        case SET_PRODUCTS:
            console.log(action.payload)
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default ProductsReducers