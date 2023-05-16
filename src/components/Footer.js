import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/Logo-Kasa-White.png';

const Footer = () => {

    return <footer>
        <Link to="/" className="logo">
            <img src={logo} alt="logo Kasa"/>
        </Link>
        <p className="copyright">
            @ 2020 Kasa. All right reserved
        </p>
    </footer>

}

export default Footer
