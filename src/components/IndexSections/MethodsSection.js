import React from 'react';

import MethodElement from './MethodsSection/MethodElement';
import method1 from '../../images/physical-therapy.svg';
import method2 from '../../images/physiotherapy.svg';
import method3 from '../../images/physiotherapy2.svg';
import method4 from '../../images/rehabilitation.svg';
import styles from './index.module.scss';

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
            <a className={styles.btn} href="/methods/">
                Metody
            </a>
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
