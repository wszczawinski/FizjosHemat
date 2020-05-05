import React from 'react';
import styles from './index.module.scss';

export const AboutSection = () => {
    return (
        <>
            <article className={styles.aboutArticle}>Ola about</article>
            <button className={styles.btn} href="/about/">
                O nas
            </button>
            <article className={styles.aboutArticle}>Maciek about</article>
        </>
    );
};
