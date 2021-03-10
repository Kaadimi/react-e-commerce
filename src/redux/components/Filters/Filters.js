import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { filterProducts, setMaxPrice, setMinPrice, setMinRating, setSearch } from '../../actions/productsActions';

import "./Filters.css"

const Filters = () => {
    const categories = ['category', 'monitor', 'keyboard', 'mouse', 'headset']
    const shipping = ['shipping', 'global', 'local']
    const [filters, setFilters] = useState({search: '', category: 'category', shipping: 'shipping', minPrice: 0, maxPrice: 1000, minRating: 0, maxRating: 5})
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
                <select name="category" onChange={e => handleChange(e)}>
                    {categories.map((category, i) => <option key={i} value={category}>{category}</option>)}
                </select>
                <div id="searchContainer">
                    <img src={process.env.PUBLIC_URL + '/loupe.svg'}></img>
                    <input type="text" placeholder="Search..." name="search" onChange={e => handleChange(e)}></input>
                </div>
            </div>
          
            <div className="FiltersRowContainer">
                <select name="shipping" onChange={e => handleChange(e)}>
                    {shipping.map((method, i) => <option key={i} value={method}>{method}</option>)}
                </select>
                <div>
                    <p>price</p>
                    <div>
                        <input name="minPrice" type="number" min="0" max="1000" value={filters.minPrice} onChange={e => handleChange(e)}></input>
                        <input name="maxPrice" type="number" min="0" max="1000" value={filters.maxPrice} onChange={e =>  handleChange(e)}></input>
                    </div>
                </div>
                <div>
                    <p>rating</p>
                    <div>
                        <input name="minRating" type="number" min="0" max="5" value={filters.minRating} onChange={e =>  handleChange(e)}></input>
                        <input name="maxRating" type="number" min="0" max="5" value={filters.maxRating} onChange={e =>  handleChange(e)}></input>
                    </div>
                </div>
            </div>
            
            <button type="submit" id="filtersSubmit" onClick={e => dispatch(filterProducts(filters))}>search</button>
        </form>
    );
}

export default Filters;
