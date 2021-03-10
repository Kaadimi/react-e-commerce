import { SET_PRODUCTS, SET_INITIAL_PRODUCTS, SET_PRODUCT, ADD_TO_CHART } from "../actions";

const initialState = {
    initialProducts: [],
    products: [],
    product: null,
    chart: []
}

const ProductsReducers = (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_TO_CHART:
            return {
                ...state,
                chart: [...state.chart, action.payload]
            }
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
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