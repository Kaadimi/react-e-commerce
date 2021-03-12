import { SET_CHART } from '.'

export const setCart = (payload) => {
    return {
        type: SET_CHART,
        payload
    }
}

export const addToCart = ({product, quantity}) => (dispatch, getState) => {
    const { cart } = getState();
    const newCart = [];
    const len = cart.length;

    if (!cart.some(item => item.product.category === product.category && item.product.id === product.id))
        dispatch(setCart([...cart, {product, quantity}]))
    else {
        for (let i = 0; i < len; i++)
        {
            if (cart[i].product.category === product.category && cart[i].product.id === product.id)
                newCart.push({product: cart[i].product, quantity: cart[i].quantity + quantity})
            else
                newCart.push(cart[i])
        }
        dispatch(setCart(newCart))
    }
}

export const removeFromCart = (product) => (dispatch, getState) => {
    const { cart } = getState();

    dispatch(setCart(cart.filter(item => item.product.category !== product.category || item.product.id !== product.id)))
}