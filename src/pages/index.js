import React from 'react';
import styles from './index.module.scss';

import { AboutSection, BlogSection, MethodsSection, Layout } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            <div className={styles.parallax}></div>
            <div className={styles.arrows}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <main className={styles.home}>
                <section className={styles.about}>
                    <AboutSection />
                </section>
                <hr/>
                <section className={styles.methods}>
                    <MethodsSection />
                </section>
                <hr/>
                <section className={styles.blog}>
                    <BlogSection />
                </section>
            </main>
        </Layout>
    );
};

export default IndexPage;
