import React from 'react';
import { Link } from 'gatsby';
import Logo from '..//images/FizjosHematLogo.svg';
import Header from '../components/Header';

const indexPage = () => {
    return (
        <div>
            <Header />
            <p>FizjosHemat</p>
            <img src={Logo} alt="FizjosHemat Logo" />
            <Link to="/contact">Contact me</Link>
        </div>
    );
};

export default indexPage;
