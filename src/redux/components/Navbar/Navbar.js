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
                {cart.length > 0 && <div id="cartSize">
                     {cart.length}
                </div>}
                <Link to="/cart">
                    <img alt="chartIcon" src={process.env.PUBLIC_URL + "/cart.svg"}></img>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
