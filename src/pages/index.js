import React from 'react';
import styles from './index.module.scss';

import Layout from '../components/Layout';
import Logo from '..//images/FizjosHematLogo.svg';

const indexPage = () => {
    return (
        <Layout>
            <div className={styles.home}>
                <img className={styles.logo} src={Logo} alt="FizjosHemat Logo" />
            </div>
        </Layout>
    );
};

export default indexPage;
