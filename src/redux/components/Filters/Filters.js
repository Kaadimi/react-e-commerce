import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../actions/productsActions';

import "./Filters.css"

const Filters = () => {
    const categories = ['category', 'monitor', 'keyboard', 'mouse', 'headset']
    const shipping = ['shipping', 'global', 'local']
    const [filters, setFilters] = useState({search: '', category: 'category', shipping: 'shipping', price: 0, rating: 0})
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setFilters(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <form id="filtersContainer">
            <div className="FiltersRowContainer">
                <select className="filterSelect" name="category" onChange={e => handleChange(e)}>
                    {categories.map((category, i) => <option key={i} value={category}>{category}</option>)}
                </select>
                <div id="searchContainer">
                    <img alt="searchIcon" src={process.env.PUBLIC_URL + '/loupe.svg'}></img>
                    <input type="text" placeholder="Find your device..." name="search" onChange={e => handleChange(e)}></input>
                </div>
            </div>
          
            <div className="FiltersRowContainer">
                <select className="filterSelect" name="shipping" onChange={e => handleChange(e)}>
                    {shipping.map((method, i) => <option key={i} value={method}>{method}</option>)}
                </select>
                <div className="filterSlider">
                    <p>price</p>
                    <input name="price" type="range" min="0" max="1000" value={filters.price} onChange={e => handleChange(e)}></input>
                    <span>{filters.price}</span>
                </div>
                <div className="filterSlider">
                    <p>rating</p>
                    <input name="rating" type="range" min="0" max="5" value={filters.rating} onChange={e =>  handleChange(e)}></input>
                    <span>{filters.rating}</span>
                </div>
            </div>
            
            <button type="submit" id="filtersSubmit" onClick={e => {e.preventDefault();dispatch(filterProducts(filters))}}>search</button>
        </form>
    );
}

export default Filters;
