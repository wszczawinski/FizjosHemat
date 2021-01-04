import React from 'react';
import styles from './Footer.module.scss';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);
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
                        <a href="tel:+48600286452">+48 600 286 452</a>
                    </div>
                    <div className={styles.person}>
                        <h5>Maciej Koktysz</h5>
                        <a href="tel:+48696440062">+48 696 440 062</a>
                    </div>
                </div>
            </article>
            <article className={styles.copyrights}>
                <a href="https://wojtekszczawinski.site/" target="blank">
                    &copy; {data.site.siteMetadata.author}
                </a>
            </article>
        </footer>
    );
};

export default Footer;
