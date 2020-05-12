import React from 'react';
import styles from './MethodElement.module.scss';

function MethodElement({ img, title, contentText, side }) {
    return (
        <div className={styles.methodElementContainer}>
            {side === 'left' && <div className={styles.imageContainer}>
                <img src={img} alt='' className={styles.image} />
            </div>}
            
            <div className={styles.textContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{contentText}</div>
            </div>
            {side === 'right' && <div className={styles.imageContainer}>
                <img src={img} alt='' className={styles.image} />
            </div>}
        </div>
    )
}

export default MethodElement
