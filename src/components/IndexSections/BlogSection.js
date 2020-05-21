import React from 'react';
import styles from './index.module.scss';

export const BlogSection = () => {
    return (
        <>
            <article>Ola about</article>
            <a className={styles.btn} href="/blog/">
                Blog
            </a>
            <article>Maciek about</article>
        </>
    );
};
