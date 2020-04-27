import React from 'react';
import styles from './index.module.scss';

import Layout from '../components/Layout';

const IndexPage = () => {
    return (
        <Layout>
            <div className={styles.parallax}></div>
            <main className={styles.home}>
                <section className={styles.about}>
                    <article>
                        Ola about
                    </article>
                    <a href="/about">O nas</a>
                    <article>
                        Maciek about
                    </article>
                </section>
                <section className={styles.blog}>
                    <hr />
                </section>
                <section className={styles.methods}>
                    <hr />
                </section>
            </main>
        </Layout>
    );
};

export default IndexPage;
