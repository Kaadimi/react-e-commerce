import axios from 'axios'

import { SET_PRODUCTS, SET_INITIAL_PRODUCTS } from "."

export const setProducts = (payload) => {
    return {
        type: SET_PRODUCTS,
        payload
    }
}

export const setInitialProducts = (payload) => {
    return {
        type: SET_INITIAL_PRODUCTS,
        payload
    }
}

const filterMachine = (products, filters) => {
    const regex = new RegExp(filters.search, "i");

    if (filters.category === 'category' && filters.shipping === 'shipping')
        return products.filter(product => regex.test(product.title) && product.price >= filters.price && product.rating >= filters.rating);
    if (filters.category === 'category' && filters.shipping !== 'shipping')
        return products.filter(product => regex.test(product.title) && product.shipping === filters.shipping && product.price >= filters.price && product.rating >= filters.rating);
    else if (filters.shipping === 'shipping' && filters.category !== 'category')
        return products.filter(product => regex.test(product.title) && product.category === filters.category && product.price >= filters.price && product.rating >= filters.rating);
    else
    return products.filter(product => regex.test(product.title) && product.category === filters.category && product.shipping === filters.shipping && product.price >= filters.price && product.rating >= filters.rating);
}

export const filterProducts = (filters) => {
    return (dispatch, getState) => {
        const { initialProducts } = getState();
        
        dispatch(setProducts(filterMachine(initialProducts, filters)));
    }
}

export const getProducts = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/products")
        .then(res => {
            dispatch(setInitialProducts(res.data))
        })
        .catch(console.error)
    }
}