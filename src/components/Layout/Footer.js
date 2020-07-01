import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <article className={styles.footerContact}>
                <h5>Contact</h5>
                <a href="fijoshemat@gmail.com">fijzjoshemat@gmail.com</a>
            </article>
            <article className={styles.footerSocials}>
                <h5>Społecznościowe</h5>
                <a href="">instagram</a>
                <a href="">facebook</a>
            </article>
            <article className={styles.footerLocalization}>
                <p>Maciej</p>
                <p>Ola</p>
            </article>
            <article className={styles.footerCopy}>
                <p>
                    &copy; 2020 <a href="#">Lemme-Do</a>{' '}
                </p>
            </article>
        </footer>
    );
};

export default Footer;
