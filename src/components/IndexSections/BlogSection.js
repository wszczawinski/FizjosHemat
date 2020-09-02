import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './BlogSection.module.scss';
import { Button } from './Button';

export const BlogSection = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            author
                            description
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    return (
        <>
            <article className={`${styles.blogArticle} ${styles.first}`}>
                <Link to={`/blog/${data.allMarkdownRemark.edges[0].node.fields.slug}`}>
                    <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h3>
                </Link>

                <p className={styles.author}>
                    {data.allMarkdownRemark.edges[0].node.frontmatter.author}
                </p>

                <p className={styles.description}>
                    {data.allMarkdownRemark.edges[0].node.frontmatter.description}
                </p>

                <p className={styles.date}>
                    {data.allMarkdownRemark.edges[0].node.frontmatter.date}
                </p>
            </article>
            <Button text={'Blog'} link={'/blog/'} />
            <article className={`${styles.blogArticle} ${styles.second}`}>
                <Link to={`/blog/${data.allMarkdownRemark.edges[1].node.fields.slug}`}>
                    <h3>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</h3>
                </Link>
                <p className={styles.author}>
                    {data.allMarkdownRemark.edges[1].node.frontmatter.author}
                </p>
                <p className={styles.blogText}>
                    {data.allMarkdownRemark.edges[1].node.frontmatter.description}
                </p>
                <p className={styles.date}>
                    {data.allMarkdownRemark.edges[1].node.frontmatter.date}
                </p>
            </article>
        </>
    );
};
