import React from 'react';
import { Link } from 'gatsby';
import Logo from '..//images/FizjosHematLogo.svg';
import styles from './index.module.scss';

import Layout from '../components/Layout';

const indexPage = () => {
    return (
        <Layout>
                <img className={styles.logo} src={Logo} alt="FizjosHemat Logo" />
        </Layout>
    );
};

export default indexPage;
