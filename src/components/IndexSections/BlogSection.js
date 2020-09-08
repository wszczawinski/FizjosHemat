import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './BlogSection.module.scss';
import { Button } from './Button';

export const BlogSection = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "YYYY-MM-DD")
                        author
                        description
                    }
                }
            }
        }
    `);
    return (
        <>
            <article className={`${styles.blogArticle} ${styles.first}`}>
                <Link to={`/blog/${data.allContentfulBlogPost.edges[0].node.slug}`}>
                    <h3>{data.allContentfulBlogPost.edges[0].node.title}</h3>
                </Link>

                <p className={styles.author}>
                    {data.allContentfulBlogPost.edges[0].node.author}
                </p>

                <p className={styles.description}>
                    {data.allContentfulBlogPost.edges[0].node.description}
                </p>

                <p className={styles.date}>
                    {data.allContentfulBlogPost.edges[0].node.publishedDate}
                </p>
            </article>
            <Button text={'Blog'} link={'/blog/'} />
            <article className={`${styles.blogArticle} ${styles.second}`}>
                <Link to={`/blog/${data.allContentfulBlogPost.edges[1].node.slug}`}>
                    <h3>{data.allContentfulBlogPost.edges[1].node.title}</h3>
                </Link>

                <p className={styles.author}>
                    {data.allContentfulBlogPost.edges[1].node.author}
                </p>

                <p className={styles.description}>
                    {data.allContentfulBlogPost.edges[1].node.description}
                </p>

                <p className={styles.date}>
                    {data.allContentfulBlogPost.edges[1].node.publishedDate}
                </p>
            </article>
        </>
    );
};
