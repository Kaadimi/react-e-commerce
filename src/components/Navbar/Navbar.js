import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    //nav element
    return (
        <div id="navbar">
            <h1>SetupCo</h1>
            <div>
                <Link to="/cart">
                    <img src={process.env.PUBLIC_URL + "/like.svg"}></img>
                </Link>
                <Link to="/cart">
                    <img src={process.env.PUBLIC_URL + "/cart.svg"}></img>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
