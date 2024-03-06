import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavSection">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/About">
                    <li>About</li>
                </Link>
                <Link to="/dashboard">
                    <li>dashboard</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar