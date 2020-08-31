import React from 'react';
import { graphql } from 'gatsby';
import styles from './blogPost.module.scss';

import { Layout } from '../components';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
                author
            }
            html
        }
    }
`;

const Blog = props => {
    return (
        <Layout>
            <main className={styles.blogPostContent}>
                <section className={styles.post}>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p>{props.data.markdownRemark.frontmatter.date}</p>
                    <p>{props.data.markdownRemark.frontmatter.author}</p>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{
                            __html: props.data.markdownRemark.html,
                        }}
                    ></div>
                </section>
            </main>
        </Layout>
    );
};

export default Blog;
