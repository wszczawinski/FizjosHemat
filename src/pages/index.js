import React from 'react';
import styles from './index.module.scss';

import { AboutSection, BlogSection, MethodsSection, Layout } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            <div className={styles.parallax}></div>
            <div className={styles.arrows}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <main className={styles.home}>
                <p className={styles.interSection}>
                    <strong>Witamy!</strong> Nazywamy się Ola i Maciek, jesteśmy
                    magistrami fizjoterapii. Pracujemy w dwóch klinikach hematologii - UCK
                    w Gdańsku i UCK w Warszawie. Poznaliśmy się na sympozjum w Wielkiej
                    Brytanii i odkryliśmy wiele podobieństw w naszym podejściu do pracy z
                    pacjentami hematoonkologicznymi. Dlatego postanowiliśmy połączyć nasze
                    siły, żeby skuteczniej wspierać naszych pacjentów i siebie nawzajem,
                    bo co dwie głowy to nie jedna.Rehabilitacja jest bardzo ważnym element
                    kompleksowego leczenia pacjenta. Powinna być realizowana w każdej
                    fazie choroby i na każdym etapie jej leczenia. Dzięki działaniom
                    fizjoterapeutycznym można zapobiegać wielu powikłaniom wynikającym z
                    leczenia przeciwnowotworowego, a w przypadku ich wystąpienia znacznie
                    je zmniejszać, a nawet całkowicie redukować.
                </p>
                <section className={styles.about}>
                    <AboutSection />
                </section>
                <p className={styles.interSection}>
                    W naszej pracy kładziemy nacisk na maksymalną niezależność pacjenta.
                    Chcemy, aby poprzez nasze działania, przeszedł w jak najbardziej
                    optymalny sposób przez całe leczenie choroby, wrócił do sprawności
                    psychofizycznej i brał czynny udział w życiu społecznym oraz
                    zawodowym. Uczymy pacjentów jak dzięki prostym ćwiczeniom fizycznym
                    uzyskiwać nie tylko utrzymanie bądź poprawę sprawności, ale również
                    wpływać na samopoczucie w czasie choroby. Ważnym elementem jest też
                    edukacja, w której zwracamy uwagę na otoczenie, styl życia pacjentów i
                    podpowiadamy rozwiązania do kontynuowania fizjoterapii w warunkach
                    domowych.
                </p>
                <section className={styles.methods}>
                    <MethodsSection />
                </section>
                <p className={styles.interSection}>
                    Mamy szczęście, że pracujemy w ośrodkach, w których rehabilitacja jest
                    częścią leczenia hematologicznego. Postanowiliśmy stworzyć miejsce dla
                    pacjentów, w którym będą mogli znaleźć wskazówki fizjoterapeutyczne na
                    czas leczenia i rekonwalescencji.
                </p>
                <section className={styles.blog}>
                    <BlogSection />
                </section>
            </main>
        </Layout>
    );
};

export default IndexPage;
