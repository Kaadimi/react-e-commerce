import React from 'react';
import { Link } from 'react-router-dom'

import "./PageNotFoud.css"

const PageNotFound = () => {
    return (
        <div id="pageNotFoundContainer">
            <img src={process.env.PUBLIC_URL + "/error.svg"}></img>
            <div id="pageNotFoundInfo">
                <h5>Oh no!</h5>
                <span>we didn’t find what you are looking for</span>
                <Link id="goHomeBtn" to="/">go home</Link>
            </div>
        </div>
    );
}

export default PageNotFound;
