import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navList}>
                <div className={styles.navLeft}>
                    <Link
                        className={styles.navItem}
                        activeClassName={styles.activeNavItem}
                        to="/about/"
                    >
                        O nas
                    </Link>

                    <Link
                        className={styles.navItem}
                        activeClassName={styles.activeNavItem}
                        to="/blog/"
                    >
                        Blog
                    </Link>
                </div>
                <div className={styles.navCenter}>
                    <Link className={styles.navLogo} to="/">
                        <b>F</b>izjos<b>H</b>emat
                    </Link>
                </div>
                <div className={styles.navRight}>
                    <Link
                        className={styles.navItem}
                        activeClassName={styles.activeNavItem}
                        to="/methods/"
                    >
                        Usługi
                    </Link>

                    <Link
                        className={styles.navItem}
                        activeClassName={styles.activeNavItem}
                        to="/contact/"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
