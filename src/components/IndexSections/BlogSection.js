import React from 'react';
import styles from './index.module.scss';

export const BlogSection = () => {
    return (
        <>
            <article>Ola about</article>
            <button className={styles.btn} href="/about/">
                O nas
            </button>
            <article>Maciek about</article>
        </>
    );
};
