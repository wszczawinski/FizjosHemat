import React from 'react';
import MethodElement from './MethodsSection/MethodElement';
import styles from './MethodsSection.module.scss';
import { Button } from './Button';

export const MethodsSection = () => {
    return (
        <>
            <article className={styles.methodsArticle}>
                <MethodElement
                    title="Kinezyterapia"
                    contentText="Zestaw ćwiczeń dobranych przez fizjoterapeutę indywidualnie dla każdego pacjenta po to, żeby osiągnąć jak najlepszy efekt w danym przypadku. Bardzo lubimy używać pojęcia terapia szyta na miarę, które dokładnie oddaje nasze intencje."
                    side="left"
                />
                <MethodElement
                    title="Masaż"
                    contentText="Prawdopodobnie najbardziej pożądany przez pacjentów zabieg fizjoterapeutyczny. Stosowany jako element terapii, który w zależności od potrzeb może pełnić różne funkcje – przygotować tkanki do ćwiczeń, działać przeciwobrzękowo lub rozluźnić mięśnie po wysiłku."
                    side="right"
                />
                <MethodElement
                    title="Kinesiology taping"
                    contentText="Metoda terapeutyczna polegająca na oklejaniu wybranych fragmentów ciała plastrami o specjalnej strukturze. Stosowana jako element wspomagający terapię przy łagodzeniu bólu czy obrzęku."
                    side="left"
                />
            </article>
            <Button text={'Metody'} link={'/mehods/'} />
            <article className={styles.methodsArticle}>
                <MethodElement
                    title="Fizjoterapia oddechowa"
                    contentText="Terapia oddechowa uczy pacjenta technik kontroli oddechu oraz prawidłowych nawyków oddechowych. Jest kluczową, choć nadal jeszcze niedocenianym obszarem fizjoterapii. Trening oddechowy poprawia ogólny stan zdrowia, zapewnia lepszy sen, koncentrację, a także wydolność fizyczną."
                    side="right"
                />
                <MethodElement
                    title="PNF - people need fun"
                    contentText="Koncepcja terapeutyczna, na którą składają się takie elementy jak pozytywne podejście do terapii, ułatwianie ruchu, bezpieczna i bezbolesna praca. Bardzo istotnym elementem jest współuczestnictwo pacjenta w planowaniu terapii – pacjent określa czynności, które sprawiają mu problem i są mu najbardziej potrzebne, a terapeuta planuje ćwiczenia tak, aby umożliwić ich przywracanie."
                    side="right"
                />
            </article>
        </>
    );
};
