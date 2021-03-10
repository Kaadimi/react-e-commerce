import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, ratingToArray, addToChart } from '../../actions/productsActions';

import './Product.css'

const Product = (props) => {
    const dispatch = useDispatch();
    const { product } = useSelector(state => state);
    const [imageId, setImageId] = useState(1);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (props.match.params.category && props.match.params.id)
            dispatch(getProduct(props.match.params.category, props.match.params.id))
             // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="productPageContainer">
            {product ? <div id="productPageInnerContainer">
                 <div id="productPageLeftContainer">
                    <div id="productPageLeft">
                        <div id="previewImagesContainer">
                            {[1, 2, 3, 4].map(id => <img key={id} alt={`previewImage#${id}`} onClick={() => setImageId(id)} src={`${process.env.PUBLIC_URL}/images/${product.category}/${product.id}/${id}.jpg`}></img>)}
                        </div>
                        <div id="productPageImage">
                            <img alt="productImage" src={`${process.env.PUBLIC_URL}/images/${product.category}/${product.id}/${imageId}.jpg`}></img>
                        </div>
                    </div>
                    <button onClick={() => dispatch(addToChart({product, quantity}))} id="addToChartBtn">add to chart</button>
                </div>

                <div id="productPageRight">
                    <div className="pageRightDiv">
                        <h2 id="productPageTitle">{product.title}</h2>
                        <div>
                            {ratingToArray(product.rating).map((star, i) => <img id="starIcon" alt="starIcon" key={i} src={process.env.PUBLIC_URL + (star === 1 ? "/full_star.svg" : star === 0.5 ? "/half_star.svg" : "/star.svg")}></img>)}
                        </div>
                    </div>
                    <div className="pageRightDiv">
                        <div className="pageRightUtilityDiv">
                            <p>price</p>
                            <p id="productPagePrice">{product.price} <span>$</span></p>
                        </div>
                        <div className="pageRightUtilityDiv">
                            <p>quantity</p>
                            <input id="quantityInput" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="pageRightDiv">
                        <h5 id="descriptionTitle">description</h5>
                        <ul id="descriptionLines">
                            {product.description.split('\n').map((line, i) => <li key={i}>{line}</li>)}
                        </ul>
                    </div>
                </div>
            </div> : null}
        </div>
    );
}

export default Product;
