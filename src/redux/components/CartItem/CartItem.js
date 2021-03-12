import React from 'react';
import { useDispatch } from 'react-redux'
import { cartQuantityChange, removeFromCart } from '../../actions/CartActions';

import "./CartItem.css"

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cartItemContainer">
            <div className="cartItemInfo">
                <img alt="cartItemImage" src={`${process.env.PUBLIC_URL}/images/${item.product.category}/${item.product.id}/1.jpg`}></img>
                <p>{item.product.title}</p>
            </div>
            <div className="cartItemDiv">
                <input type="number" min="1" value={item.quantity} onChange={(e) => dispatch(cartQuantityChange({product: item.product, quantity: e.target.value}))}></input>
            </div>
            <div className="cartItemDiv">
                <p>{(item.product.price * item.quantity).toFixed(2)} <span>$</span></p>
            </div>
            <button id="removeItem" onClick={() => dispatch(removeFromCart(item.product))}>X</button>
        </div>
    );
}

export default CartItem;
