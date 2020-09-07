import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components';

import styles from './blog.module.scss';

const BlogPage = () => {
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
        <Layout>
            <main className={styles.blogContainer}>
                <section className={styles.blogPosts}>
                    {data.allContentfulBlogPost.edges.map(edge => {
                        return (
                            <article className={styles.singlePost} key={edge.node.slug}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                </Link>
                                <p className={styles.author}>{edge.node.author}</p>
                                <p>{edge.node.description}</p>
                                <p className={styles.date}>{edge.node.publishedDate}</p>
                            </article>
                        );
                    })}
                </section>
            </main>
        </Layout>
    );
};

export default BlogPage;
