import React from 'react';
import { Link } from 'react-router-dom'

import CartItem from '../CartItem/CartItem';

import "./CartBody.css"

const CartBody = ({ cart }) => {
    return (
        <div id="cartInnerContainer">
            <h1>shopping cart.</h1>
            <div id="cartHeaders">
                <span>product</span>
                <span>quantity</span>
                <span>total price</span>
            </div>
            {cart.map((item, id) => <CartItem key={id} item={item}/>)}
            <div id="cartFooter">
                <Link to="/" id="cartBack">
                    <img alt="goBackIcon" src={process.env.PUBLIC_URL + '/left-arrow.svg'}></img>
                    <span>continue shopping</span>
                </Link>
                <div id="cartCheckout">
                    <p>total: <span>{cart.length > 0 ? cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2) : 0} $</span></p>
                    <button>checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartBody;
