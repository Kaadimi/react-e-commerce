import React from 'react';
import { Link } from 'react-router-dom'

import { ratingToArray } from '../../actions/ProductsActions'
import "./ProductCard.css"

const ProductCard = ({product}) => {
    const { id, category, title, price, rating } = product;

    return (
        <Link style={{textDecoration: 'none'}} to={`product/${category}/${id}`}>
            <div className="productCard">
                <div id="productCardImages">
                    <img alt="productImage" id="productCardImage" src={`${process.env.PUBLIC_URL}/images/${category}/${id}/1.jpg`}></img>
                    <div id="productCardRating">
                        {ratingToArray(rating).map((star, i) => <img alt="starIcons" key={i} src={process.env.PUBLIC_URL + (star === 1 ? "/full_star.svg" : star === 0.5 ? "/half_star.svg" : "/star.svg")}></img>)}
                    </div>
                </div>
                <div id="productCardInfo">
                    <h5>{title}</h5>
                    <p>{price} <span>$</span></p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
