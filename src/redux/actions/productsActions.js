import axios from 'axios'

import { SET_PRODUCT, SET_LOADING, SET_SUGGESTIONS, CLEAN_PRODUCT_PAGE } from "."

export const cleanProductPage = () => {
    return {
        type: CLEAN_PRODUCT_PAGE
    }
}

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}

export const setProduct = (payload) => {
    return {
        type: SET_PRODUCT,
        payload
    }
}

export const setSuggestions = (payload) => {
    return {
        type: SET_SUGGESTIONS,
        payload
    }
}

export const daysDifference = (date) => {
    const difference = Date.now() - date;
    const days = Math.floor(difference/1000/60/60/24);

    return days === 1 ? "1 day ago" : `${days} days ago`
}

export  const ratingToArray = (number) => {
    const arr = new Array(5).fill(0)

    for (let i = 0; i < 5; i++)
    {
        if (number >= 1)
            arr[i] = 1;
        else if (number > 0)
            arr[i] = 0.5;
        number--;
    }
    return arr;
}

export const getSuggestions = (category) => () => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/products?category=${category}&_limit=3`)
        .then(resolve)
        .catch(reject);
    }) 
}

export const getProduct = (category, id) => {
    return (dispatch) => {
        dispatch(setLoading(true));

        axios.get(`http://localhost:3000/products?category=${category}&id=${id}`)
        .then(product => {
            dispatch(setProduct(product.data[0]));
            dispatch(getSuggestions(category))
            .then(suggestion => {
                dispatch(setLoading(false));
                dispatch(setSuggestions(suggestion.data))
            })
        })
        .catch(err => {
            console.log(err)
            dispatch(setLoading(false));
        })
    }
}