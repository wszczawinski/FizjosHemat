import React from 'react';
import styles from './404.module.scss';
import { Button } from '../components/IndexSections/Button';

const FourOFourPage = () => {
    return (
        <div className={styles.notFound}>
            <h1>404</h1>
            <p>
                Upss.. Niewłaściwy adres <span role='img' aria-label='neutral-face'>😐</span>
            </p>
            <Button  text={'Wróć'} link={'/'} />
        </div>
    );
};

export default FourOFourPage;
