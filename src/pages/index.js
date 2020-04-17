import React from 'react';
import Logo from '..//images/FizjosHematLogo.svg';

import Layout from '../components/Layout';

const indexPage = () => {
    return (
        <Layout>
            <p>FizjosHemat</p>
            <img src={Logo} alt="FizjosHemat Logo" />
        </Layout>
    );
};

export default indexPage;
