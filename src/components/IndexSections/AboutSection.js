import React from 'react';
import styles from './index.module.scss';
import MaciekImage from '../../images/Fizjo-maciek.png';

export const AboutSection = () => {
    return (
        <>
            <article className={styles.aboutArticle}>
                <img src={MaciekImage} alt="" className={styles.aboutImage} />
                <div className={styles.aboutDescription}>
                    <h3 className={styles.aboutTitle}>Mgr Maciek</h3>
                    <p className={styles.aboutText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto tenetur aperiam sequi, consequuntur, tempora sed, nisi
                        voluptatibus eos omnis enim adipisci? Error fuga perspiciatis
                        incidunt dolorem quas debitis blanditiis repellendus adipisci
                        nobis dolorum nesciunt vero, excepturi sapiente ratione cupiditate
                        accusamus?
                    </p>
                </div>
            </article>
            <button className={styles.btn} href="/about/">
                O nas
            </button>
            <article className={styles.aboutArticle}>
                <div className={styles.aboutDescription}>
                    <h3 className={styles.aboutTitle}>Mgr Maciek</h3>
                    <p className={styles.aboutText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto tenetur aperiam sequi, consequuntur, tempora sed, nisi
                        voluptatibus eos omnis enim adipisci? Error fuga perspiciatis
                        incidunt dolorem quas debitis blanditiis repellendus adipisci
                        nobis dolorum nesciunt vero, excepturi sapiente ratione cupiditate
                        accusamus?
                    </p>
                </div>
                <img src={MaciekImage} alt="" className={styles.aboutImage} />
            </article>
        </>
    );
};
