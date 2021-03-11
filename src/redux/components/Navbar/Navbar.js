import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const { cart } = useSelector(state => state)
    //nav element
    return (
        <div id="navbar">
             <Link to="/" style={{textDecoration: 'none'}}><h1>SetupCo</h1></Link>
            <div id="navLinks">
                <Link to="/cart">
                    <img alt="likeIcon" src={process.env.PUBLIC_URL + "/like.svg"}></img>
                </Link>
                <Link to="/cart">
                    <img alt="chartIcon" src={process.env.PUBLIC_URL + "/cart.svg"}></img>
                </Link>
                <div id="cartSize">
                    {cart.length > 0 && cart.length}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
