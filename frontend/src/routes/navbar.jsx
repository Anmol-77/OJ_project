import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'; // Ensure this import is here if using the styles

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink to="/" className="navbar-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/problemset" className="navbar-link" activeClassName="active">Problemset</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/add" className="navbar-link" activeClassName="active">Add Problem</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/login" className="navbar-link" activeClassName="active">Login</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/register" className="navbar-link" activeClassName="active">Register</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/logout" className="navbar-link" activeClassName="active">Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
