import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Logo-Kasa.png';

const Header = (props) => {

    return <header>
        <Link to="/" className="logo">
            <img src={logo} alt="logo Kasa"/>
        </Link>
        <nav className="navbar">
            <NavLink to="/" className="homeLink">
                Accueil
            </NavLink>
            <NavLink to="/about" className="aboutLink">
                A Propos
            </NavLink>
        </nav>
    </header>

}

export default Header
