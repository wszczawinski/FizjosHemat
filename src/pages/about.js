import React from 'react';
import styles from './about.module.scss';
import { Layout } from '../components';
import OlaImage from '../images/Fizjo-Ola.png';
import MaciekImage from '../images/Fizjo-Maciek.png';

const AboutPage = () => {
    return (
        <Layout>
            <main className={styles.aboutContainer}>
                <section className={styles.aboutSection}>
                    <div className={styles.column}>
                        <h2>mgr Aleksandra Bulińska</h2>
                        <img
                            className={styles.aboutImage}
                            src={OlaImage}
                            alt="mgr Aleksandra Bulińska"
                        />
                    </div>
                    <div className={styles.column}>
                        <p>Kursy:</p>
                        <p>
                            Jestem absolwentką Fizjoterapii na Uniwersytecie Medycznym w
                            Poznaniu. Studia ukończyłam w 2010 roku. Od tego czasu
                            zdobywałam doświadczenie zawodowe pracując z różnymi grupami
                            pacjentów. Mam za sobą także doświadczenie pracy za granicą.
                            Doświadczenie pracy w Anglii uświadomiło mi jak ważne jest
                            holistyczne spojrzenie w pracy z pacjentem. Dbanie nie tylko o
                            naprawienie problemu fizycznego, ale zwrócenie bacznej uwagi
                            na jakość życia pacjenta. Właśnie z taką myślą szukałam pracy
                            po powrocie do kraju. Największą część swojego zawodowego
                            życia spędzam w Klinice Hematologii i Transplantologii
                            Uniwersyteckiego Centrum Klinicznego w Gdańsku. Pracuję z
                            pacjentami na każdym etapie choroby hematologicznej,
                            towarzyszę pacjentom od momentu rozpoznania przez wszystkie
                            etapy walki z chorobą. Największym wyzwaniem jest dla mnie
                            praca z pacjentami przygotowującymi się do transplantacji
                            krwiotwórczych komórek macierzystych szpiku oraz w trakcie tej
                            procedury. Poza hematologią duży obszar moich zawodowych
                            działań wiąże się z fizjoterapią oddechową. Odpowiadam za
                            usprawnianie pacjentów w Klinice Otolaryngologii oraz jestem
                            członkiem zespołu fizjoterapeutów pracujących z pacjentami w
                            pierwszych dobach po transplantacjach płuc. Jest to bardzo
                            wymagająca i niezwykle satysfakcjonująca część mojej pracy.
                            Uwielbiam czas spędzony na świeżym powietrzu, muzykę, podróże,
                            czynny wypoczynek. Ciągle nie mogę się zdecydować co kocham
                            bardziej – góry czy morze. Jednego jestem pewna – najbardziej
                            na świecie lubię pracę z ludźmi.
                        </p>
                    </div>
                </section>
                <section className={styles.aboutSection}>
                    <div className={styles.column}>
                        <h2>mgr Maciej Koktysz</h2>
                        <img
                            className={styles.aboutImage}
                            src={MaciekImage}
                            alt="mgr Maciej Koktysz"
                        />
                    </div>
                    <div className={styles.column}>
                        <p>
                            Kursy:
                            <ul>
                                <li>Osteopatyczna Diagnostyka i Leczenie Kręgosłupa</li>
                                <li>
                                    FDM - Leczenie Zaburzeń Układu Mięśniowo-Szkieletowego
                                    Technikami Powięziowymi
                                </li>
                                <li>Manualny Drenaż Limfatyczny</li>
                                <li>Kinetic Control - Kręgosłup Lędźwiowy</li>
                                <li>Diagnostyka i Terapia Ortopedyczna</li>
                            </ul>
                        </p>
                        <p>
                            Jestem absolwentem Warszawskiego Uniwersytetu Medycznego i
                            Akademii Wychowania Fizycznego w Warszawie. W 2009 roku
                            rozpocząłem współpracę z Warszawskim Stowarzyszeniem Amazonek
                            na Bielanach, od 2014 roku pracuję z pacjentami
                            hematoonkologicznymi Kliniki Hematologii i Onkologii w
                            Uniwersyteckim Centrum Klinicznym w Warszawie, towarzysząc
                            swoim pacjentom na każdym etapie leczenia ich choroby. Do
                            każdego pacjenta podchodzę indywidualnie, bazując na jego
                            aktualnych możliwościach. Najważniejsze dla mnie w mojej pracy
                            jest pozytywne nastawienie, wiara w osiągnięciu wspólnego celu
                            i dbałość o jak najlepszą jakość życia moich pacjentów. Poza
                            onkologią, specjalizuje się w fizjoterapii po urazach i
                            operacjach ortopedycznych oraz chorobach i zespołach bólowych
                            kręgosłupa. Jestem pasjonatem ruchu i możliwości ludzkiego
                            ciała. Aktywność fizyczna od dzieciństwa wypełniała mój wolny
                            czas. Lubię łączyć różne dyscypliny sportowe, w zależności od
                            tego na co mam ochotę. Dodatkowo uwielbiam podróżować i
                            przeczytać dobrą książkę.
                        </p>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default AboutPage;
