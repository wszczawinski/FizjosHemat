import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components';

import styles from './blog.module.scss';

const BlogPage = () => {
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
        <Layout>
            <main className={styles.blogContainer}>
                <section className={styles.blogPosts}>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <article
                                className={styles.singlePost}
                                key={edge.node.frontmatter.title}
                            >
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                </Link>
                                <p className={styles.author}>
                                    {edge.node.frontmatter.author}
                                </p>
                                <p>{edge.node.frontmatter.description}</p>
                                <p className={styles.date}>
                                    {edge.node.frontmatter.date}
                                </p>
                            </article>
                        );
                    })}
                </section>
            </main>
        </Layout>
    );
};

export default BlogPage;
