import React from 'react';
import { Link } from 'react-router-dom'

import { ratingToArray } from '../../actions/productsActions';

import "./Suggestions.css"

const Suggestions = ({ suggestions }) => {
    return (
            <div id="suggestionsBar">
            {suggestions.map((suggestion, id) => 
            <Link key={id} style={{textDecoration: 'none', color: '#000'}} to={`/product/${suggestion.category}/${suggestion.id}`}>
                <div className="suggestionContainer">
                    <div className="suggestionImageContainer">
                        <img alt="smallProductImage" id="suggestionImage" src={`${process.env.PUBLIC_URL}/images/${suggestion.category}/${suggestion.id}/1.jpg`}></img>
                    </div>
                    <div className="suggestionInfoContainer">
                        <h5>{suggestion.title}</h5>
                        <div className="suggestionRating">
                                {ratingToArray(suggestion.rating).map((star, i) => <img alt="starIcons" key={i} src={process.env.PUBLIC_URL + (star === 1 ? "/full_star.svg" : star === 0.5 ? "/half_star.svg" : "/star.svg")}></img>)}
                            </div>
                            <p>{suggestion.price} <span>$</span></p>
                    </div>
                    </div>
            </Link>
            )}
            </div>
    );
}

export default Suggestions;
