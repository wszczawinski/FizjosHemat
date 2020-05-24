import React from 'react';
import MethodElement from './MethodsSection/MethodElement';
import method1 from '../../images/method1.svg';
import method2 from '../../images/method2.svg';
import method3 from '../../images/method3.svg';
import method4 from '../../images/method4.svg';
import styles from './MethodsSection.module.scss';
import { Button } from './Button';

export const MethodsSection = () => {
    return (
        <>
            <article className={styles.leftSideMethods}>
                <MethodElement
                    title="Metoda"
                    contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cum reiciendis eius ad officia qui?"
                    img={method2}
                    side="left"
                />
                <MethodElement
                    title="Metoda"
                    contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cum reiciendis eius ad officia qui?"
                    img={method3}
                    side="right"
                />
                <MethodElement
                    title="Metoda"
                    contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cum reiciendis eius ad officia qui?"
                    img={method4}
                    side="left"
                />
            </article>
            <Button text={'Metody'} link={'/mehods/'} />
            <article className={styles.rightSideMethods}>
                <MethodElement
                    title="Metoda"
                    contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cum reiciendis eius ad officia qui?"
                    img={method1}
                    side="right"
                />
                <MethodElement
                    title="Metoda"
                    contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cum reiciendis eius ad officia qui?"
                    img={method1}
                    side="right"
                />
            </article>
        </>
    );
};
