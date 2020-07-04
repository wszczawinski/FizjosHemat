import React from 'react';
import styles from './AboutSection.module.scss';
import { Button } from './Button';
import MaciekImage from '../../images/Fizjo-Maciek.png';
import OlaImage from '../../images/Fizjo-Ola.png';

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
                        Kieruję się holistycznym spojrzeniem, dbam nie tylko o naprawienie
                        problemu fizycznego, ale również zwracam baczną uwagę na
                        poprawienie ogólnej <strong>jakości życia</strong> pacjenta. Największym wyzwaniem
                        jest dla mnie praca z pacjentami przygotowującymi się do
                        transplantacji krwiotwórczych komórek macierzystych szpiku oraz w
                        trakcie tej procedury. Poza hematologią duży obszar moich
                        zawodowych działań wiąże się z fizjoterapią oddechową.
                    </p>
                </div>
            </article>
            <Button text={'O nas'} link={'/about/'} />
            <article className={styles.aboutArticle}>
                <div
                    className={`${styles.aboutDescription} ${styles.aboutDescriptionRight}`}
                >
                    <h3 className={styles.aboutTitle}>mgr Maciej Koktysz</h3>
                    <p className={styles.aboutText}>
                        Jestem pasjonatem ruchu i możliwości ludzkiego ciała. Do każdego
                        pacjenta podchodzę indywidualnie, bazując na jego aktualnych
                        możliwościach. Najważniejsze dla mnie w mojej pracy jest pozytywne
                        nastawienie, wiara w osiągnięcie wspólnego celu i dbałość o jak
                        najlepszą <strong>jakość życia</strong> moich pacjentów. Poza onkologią,
                        specjalizuje się w fizjoterapii po urazach i operacjach
                        ortopedycznych oraz chorobach i zespołach bólowych kręgosłupa.
                    </p>
                </div>
                <img src={MaciekImage} alt="" className={styles.aboutImage} />
            </article>
        </>
    );
};
