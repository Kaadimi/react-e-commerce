import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, setSearch } from '../../actions/productsActions';

import "./Filters.css"

const Filters = () => {
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state);

    return (
        <div id="filtersContainer">
            <div id="searchContainer">
                <img src={process.env.PUBLIC_URL + '/loupe.svg'}></img>
                <input type="text" placeholder="Search..." onChange={e => dispatch(setSearch(e.target.value))}></input>
            </div>
            <div id="shippingFilterContainer">
                <p>shipping</p>
                <div id="shippingOptions">
                    <button>
                        <img src={process.env.PUBLIC_URL + '/plane.svg'}></img>
                        <span>global</span>
                    </button>
                    <button>
                        <img src={process.env.PUBLIC_URL + '/van.svg'}></img>
                        <span>local</span>
                    </button>
                </div>
            </div>
            <div>
                <p>minimum price</p>
                <input type="range" min="0" max="500" step="10" value="0"></input>
            </div>
            <div>
                <p>maximum price</p>
                <input type="range" min="0" max="500" step="10" value="500"></input>
            </div>
            <div>
                <p>minimum rating</p>
                <input type="range" min="0" max="5" step="1" value="3"></input>
            </div>
            <button onClick={e => dispatch(filterProducts())}>FILTER</button>
        </div>
    );
}

export default Filters;
