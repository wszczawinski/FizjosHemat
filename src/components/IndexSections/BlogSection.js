import React from 'react';
import styles from './index.module.scss';
import blogImage from '../../images/guy.jpg';

export const BlogSection = () => {
    return (
        <>
            <article className={styles.blogArticle}>
                <img className={styles.blogImage} src={blogImage} alt="" />
                <h3 className={styles.blogTitle}>Blog</h3>
                <p className={styles.blogText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel
                    voluptate harum a porro! Omnis sequi, id, natus labore deleniti nobis
                    voluptatibus fugit reprehenderit, porro dolorem consequatur tempore
                    alias quidem.
                </p>
            </article>
            <a className={styles.btn} href="/blog/">
                Blog
            </a>
            <article className={styles.blogArticle}>
                <img className={styles.blogImage} src={blogImage} alt="" />
                <h3 className={styles.blogTitle}>Blog</h3>
                <p className={styles.blogText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel
                    voluptate harum a porro! Omnis sequi, id, natus labore deleniti nobis
                    voluptatibus fugit reprehenderit, porro dolorem consequatur tempore
                    alias quidem.
                </p>
            </article>
        </>
    );
};
