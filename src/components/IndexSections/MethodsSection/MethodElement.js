import React from 'react';
import styles from './MethodElement.module.scss';

function MethodElement({ title, contentText, side }) {
    return (
        <div className={styles.ElementContainer}>
            <div className={styles.ElementTitle}>{title}</div>
            <div className={styles.ElementContent}>{contentText}</div>
        </div>
    );
}

export default MethodElement;
