import React from 'react';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
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
