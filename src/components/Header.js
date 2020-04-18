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
                            to="/about"
                        >
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.navItem}
                            activeClassName={styles.activeNavItem}
                            to="/blog"
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
                            to="/uslugi"
                        >
                            Usługi
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.navItem}
                            activeClassName={styles.activeNavItem}
                            to="/contact"
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
