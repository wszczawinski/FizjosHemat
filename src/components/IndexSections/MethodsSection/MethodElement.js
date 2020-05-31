import React from 'react';
import styles from './MethodElement.module.scss';

function MethodElement({ title, contentText, side }) {
    return (
        <div className={styles.methodElementContainer}>
            <div className={styles.textContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{contentText}</div>
            </div>
        </div>
    );
}

export default MethodElement;
