import React, {useState} from 'react';

import { ratingToArray } from '../../actions/productsActions';
import Confirmation from '../../components/Confirmation/Confirmation';

import "./ProductInfo.css"

const ProductInfo = ({ product }) => {
    const [imageId, setImageId] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [confirm, setConfirm] = useState(false);

    return (
        <div id="productPageInnerContainer">
            <div id="productPageLeftContainer">
                <div id="productPageLeft">
                    <div id="previewImagesContainer">
                        {[1, 2, 3, 4].map(id => <img key={id} alt={`previewImage#${id}`} onClick={() => setImageId(id)} src={`${process.env.PUBLIC_URL}/images/${product.category}/${product.id}/${id}.jpg`}></img>)}
                    </div>
                    <div id="productPageImage">
                        <img alt="productImage" src={`${process.env.PUBLIC_URL}/images/${product.category}/${product.id}/${imageId}.jpg`}></img>
                    </div>
                </div>
                <button onClick={() => setConfirm(true)} id="addToChartBtn">add to chart</button>
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
                        <input id="quantityInput" type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                    </div>
                </div>
                <div className="pageRightDiv">
                    <h5 id="descriptionTitle">description</h5>
                    <ul id="descriptionLines">
                        {product.description.split('\n').map((line, i) => <li key={i}>{line}</li>)}
                    </ul>
                </div>
            </div>
            {confirm && <Confirmation product={product} quantity={quantity} setConfirm={setConfirm}/>}
        </div>
    );
}

export default ProductInfo;
