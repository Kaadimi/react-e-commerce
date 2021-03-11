import React from 'react';
import { useSelector } from 'react-redux'
import CartBody from '../../components/CartBody/CartBody';


import "./Cart.css"

const Cart = () => {
    const { cart } = useSelector(state => state)

    return (
        <div id="cartContainer">
            <CartBody cart={cart}/>
        </div>
    );
}

export default Cart;
