import axios from 'axios'

import { SET_PRODUCTS, SET_INITIAL_PRODUCTS, SET_SEARCH } from "."

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

export const setSearch = (payload) => {
    return {
        type: SET_SEARCH,
        payload
    }
}

export const filterProducts = (products = null) => {
    return (dispatch, getState) => {
        const { filters, initialProducts } = getState();
        const regex = new RegExp(filters.search, "gi");

        console.log(initialProducts)
        if (!products)
            dispatch(setProducts(initialProducts.filter(product => regex.test(product.title))));
        else
            dispatch(setProducts(products.filter(product => regex.test(product.title))));
    }
}

export const getProducts = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/products")
        .then(res => {
            dispatch(setInitialProducts(res.data))
            dispatch(filterProducts(res.data))
        })
        .catch(console.error)
    }
}