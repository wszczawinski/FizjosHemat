import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './post.module.scss';

import { Layout } from '../components';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
            publishedDate(formatString: "YYYY-MM-DD")
            author
            description
            body {
                json
            }
        }
    }
`;

const Blog = props => {
    const options = {
        renderNode: {
            'embedded-asset-block': node => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img src={url} alt={alt} />;
            },
        },
    };

    return (
        <Layout>
            <main className={styles.blogPostContent}>
                <section className={styles.post}>
                    <h2 className={styles.title}>
                        {props.data.contentfulBlogPost.title}
                    </h2>
                    <p className={styles.author}>
                        {props.data.contentfulBlogPost.author}
                    </p>
                    <div className={styles.content}>
                        {documentToReactComponents(
                            props.data.contentfulBlogPost.body.json,
                            options
                        )}
                    </div>
                    <p className={styles.date}>
                        {props.data.contentfulBlogPost.publishedDate}
                    </p>
                </section>
            </main>
        </Layout>
    );
};

export default Blog;
