import React from 'react';
import styles from './MethodsSection.module.scss';

export const MethodsSection = () => {
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