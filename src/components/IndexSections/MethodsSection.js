import React from 'react';

import MethodElement from './MethodsSection/MethodElement';
import img from '../../images/Fizjo-maciek.png';
import styles from './index.module.scss';

export const MethodsSection = () => {
    return (
        <div className={styles.methodSection}>
            <div className={styles.leftSideMethods}>
                <MethodElement
                    title="tytuł"
                    contentText="Lorem iphgve inGIe h gi hreiLGHlerhger ilNGIelhgie rgerhg ergh eiGFHeri;hg erh GUore;hg;iehr G"
                    img={img} side="left" />
                <MethodElement
                    title="tytuł"
                    contentText="Lorem iphgve inGIe h gi hreiLGHlerhger ilNGIelhgie rgerhg ergh eiGFHeri;hg erh GUore;hg;iehr G"
                    img={img} side="left" />
                <MethodElement
                    title="tytuł"
                    contentText="Lorem iphgve inGIe h gi hreiLGHlerhger ilNGIelhgie rgerhg ergh eiGFHeri;hg erh GUore;hg;iehr G"
                    img={img} side="left" />
            </div>
            <div className={styles.rightSideMethods}>
                <MethodElement
                    title="tytuł"
                    contentText="Lorem iphgve inGIe h gi hreiLGHlerhger ilNGIelhgie rgerhg ergh eiGFHeri;hg erh GUore;hg;iehr G"
                    img={img} side="right" />
                <MethodElement
                    title="tytuł"
                    contentText="Lorem iphgve inGIe h gi hreiLGHlerhger ilNGIelhgie rgerhg ergh eiGFHeri;hg erh GUore;hg;iehr G"
                    img={img} side="right" />
            </div>
        </div>

    );
};
