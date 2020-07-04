import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <article className={styles.contact}>
                <div>
                    <h5>Kontakt</h5>
                    <p>
                        <a href="mailto:fijzjoshemat@gmail.com">fijzjoshemat@gmail.com</a>
                    </p>
                </div>
                <div className={styles.people}>
                    <div className={styles.person}>
                        <h5>Aleksandra Bulińska</h5>
                        <p>+48 600 700 800</p>
                    </div>
                    <div className={styles.person}>
                        <h5>Maciej Koktysz</h5>
                        <p>+48 600 700 800</p>
                    </div>
                </div>
            </article>
            <article className={styles.footerCopy}>
                <p>
                    &copy; 2020 <a href="http://lemme-do.site">Lemme-Do</a>{' '}
                </p>
            </article>
        </footer>
    );
};

export default Footer;
