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
                <div id="conformationBody">
                    <div id="confirmationInfo">
                        <img alt="productImage" src={`${process.env.PUBLIC_URL}/images/${product.category}/${product.id}/1.jpg`}></img>
                    </div>
                    <div id="confirmationRightSide">
                        <p>{product.title}</p>
                        <div id="confirmationActions">
                            <button id="cancelPurchase" onClick={() => setConfirm(false)}>cancel</button>
                            <button id="confirmPurchase" onClick={() => {dispatch(addToCart({product, quantity})); setConfirm(false)}}>confirm X{quantity}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Confirmation;
