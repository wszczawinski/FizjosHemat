import React from 'react';
import styles from './index.module.scss';
import MaciekImage from '../../images/Maciek-blue.png';
import OlaImage from '../../images/Ola-black-1.png';

export const AboutSection = () => {
    return (
        <>
            <article className={styles.aboutArticle}>
                <img src={OlaImage} alt="" className={styles.aboutImage} />
                <div
                    className={`${styles.aboutDescription} ${styles.aboutDescriptionLeft}`}
                >
                    <h3 className={styles.aboutTitle}>mgr Aleksandra Bulińska</h3>
                    <p className={styles.aboutText}>
                        Kierują się holistycznym spojrzeniem, dbam nie tylko o naprawienie
                        problemu fizycznego, ale również zwracam baczną uwagę na
                        poprawienie ogólnej jakości życia pacjenta. Największym wyzwaniem
                        jest dla mnie praca z pacjentami przygotowującymi się do
                        transplantacji krwiotwórczych komórek macierzystych szpiku oraz w
                        trakcie tej procedury. Poza hematologią duży obszar moich
                        zawodowych działań wiąże się z fizjoterapią oddechową.
                    </p>
                </div>
            </article>
            <button className={styles.btn} href="/about/">
                O nas
            </button>
            <article className={styles.aboutArticle}>
                <div
                    className={`${styles.aboutDescription} ${styles.aboutDescriptionRight}`}
                >
                    <h3 className={styles.aboutTitle}>mgr Maciej Koktysz</h3>
                    <p className={styles.aboutText}>
                        Jestem pasjonatem ruchu i możliwości ludzkiego ciała. Do każdego
                        pacjenta podchodzę indywidualnie, bazując na jego aktualnych
                        możliwościach. Najważniejsze dla mnie w mojej pracy jest pozytywne
                        nastawienie, wiara w osiągnięciu wspólnego celu i dbałość o jak
                        najlepszą jakość życia moich pacjentów. Poza onkologią,
                        specjalizuje się w fizjoterapii po urazach i operacjach
                        ortopedycznych oraz chorobach i zespołach bólowych kręgosłupa.
                    </p>
                </div>
                <img src={MaciekImage} alt="" className={styles.aboutImage} />
            </article>
        </>
    );
};
