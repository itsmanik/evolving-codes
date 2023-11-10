import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return <>
        <nav>
            <Link to="/" className="logo">EVOLVING CODES</Link>
            <div className="links">
                <Link to="/">Home</Link>
                <a href="#working">Working</a>
                <Link to="/services">Services</Link>
                <a href="#contact">Contact Us</a>
            </div>
        </nav>
    </>
}

export default Nav;