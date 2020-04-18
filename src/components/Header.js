import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link
                            className={styles.navItem}
                            activeClassName={styles.activeNavItem}
                            to="/"
                        >
                            Metody
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.navItem}
                            activeClassName={styles.activeNavItem}
                            to="/"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.title} to="/">
                            FizjosHemat
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.navItem}
                            activeClassName={styles.activeNavItem}
                            to="/"
                        >
                            O Nas
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.navItem}
                            activeClassName={styles.activeNavItem}
                            to="/"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
