import React from 'react';
import "./Filters.css"

const Filters = () => {
    return (
        <div id="filtersContainer">
            <div id="searchContainer">
                <img src={process.env.PUBLIC_URL + '/loupe.svg'}></img>
                <input type="text" placeholder="Search..."></input>
            </div>
            <div>
                <p>shipping</p>
                <div>
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
                <input type="range" min="50000" max="500000" step="100" value="250000"></input>
            </div>
            <div>
                <p>maximum price</p>
                <input type="range" min="50000" max="500000" step="100" value="250000"></input>
            </div>
            <div>
                <p>minimum rating</p>
                <input type="range" min="50000" max="500000" step="100" value="250000"></input>
            </div>
        </div>
    );
}

export default Filters;
