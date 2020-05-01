import React from 'react';
import styles from './Layout.module.scss';

import Head from './Head';
import Header from './Header';
import Footer from './Footer';

export const Layout = props => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Head />
                <Header />
                {props.children}
            </div>

            <Footer />
        </div>
    );
};
