import React from 'react';

import "./CartItem.css"

const CartItem = ({ item }) => {
    return (
        <div className="cartItemContainer">
            <div className="cartItemInfo">
                <img alt="cartItemImage" src={`${process.env.PUBLIC_URL}/images/${item.product.category}/${item.product.id}/1.jpg`}></img>
                <p>{item.product.title}</p>
            </div>
            <div className="cartItemDiv">
                <input type="number" value={item.quantity}></input>
            </div>
            <div className="cartItemDiv">
                <p>{item.product.price * item.quantity} <span>$</span></p>
            </div>
        </div>
    );
}

export default CartItem;
