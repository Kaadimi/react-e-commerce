import React from 'react';

const ProductCard = ({product}) => {
    const { id, category, title, price, rating } = product;
    const ratingToArray = (number) => {
        const arr = new Array(5).fill(0)

        for (let i = 0; i < 5; i++)
        {
            if (number >= 1)
                arr[i] = 1;
            else if (number > 0)
                arr[i] = 0.5;
            number--;
        }
        return arr;
    }

    return (
        <div className="productCard">
            <div id="productCardImages">
                <img id="productCardImage" src={`${process.env.PUBLIC_URL}/images/${category}/${id}/1.jpg`}></img>
                <div id="productCardRating">
                    {ratingToArray(rating).map((star, i) => <img key={i} src={process.env.PUBLIC_URL + (star === 1 ? "/full_star.svg" : star === 0.5 ? "/half_star.svg" : "/star.svg")}></img>)}
                </div>
            </div>
            <div id="productCardInfo">
                <h5>{title}</h5>
                <p>{price} <span>$</span></p>
            </div>
        </div>
    );
}

export default ProductCard;
