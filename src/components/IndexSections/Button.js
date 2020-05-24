import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ text, link }) => {
    return (
        <a className={styles.btn} href={link}>
            {text}
        </a>
    );
};
