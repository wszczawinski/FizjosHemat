import React from 'react';
import '../styles/index.scss';
import styles from './Layout.module.scss';

import Header from './Header';
import Footer from './Footer';

const Layout = props => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                {props.children}
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
