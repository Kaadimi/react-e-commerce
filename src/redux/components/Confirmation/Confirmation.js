import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/productsActions';

import "./Confirmation.css"

const Confirmation = ({ product, quantity, setConfirm }) => {
    const dispatch = useDispatch();

    return (
        <div id="dialogContainer">
            <div id="purchaseConfirmationContainer">
                <div id="confirmationHeader">
                    confirmation
                </div>
                <div id="confirmationInfo">
                    <img alt="productImage" src={`${process.env.PUBLIC_URL}/images/${product.category}/${product.id}/1.jpg`}></img>
                    <p>{product.title}</p>
                </div>
                <div id="confirmationActions">
                    <button id="confirmPurchase" onClick={() => {dispatch(addToCart({product, quantity})); setConfirm(false)}}>confirm</button>
                    <button id="cancelPurchase" onClick={() => setConfirm(false)}>cancel</button>
                </div>
            </div>
        </div>

    );
}

export default Confirmation;
