import React from 'react';
import { useDispatch } from 'react-redux'

import { sortProducts } from '../../actions/LandingActions';

import "./SortProducts.css"

const SortProducts = () => {
    const dispatch = useDispatch();
    const sorts = ["sort", "increasing price", "decreasing price", "earliest date", "latest date"];

    return (
        <div id="sortContainer">
            <select onChange={(e) => dispatch(sortProducts(e.target.value))}>
                {sorts.map((sort, i) => <option key={i} value={sort}>{sort}</option>)}
            </select>
        </div>
    );
}

export default SortProducts;
