import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components';

import img from '../images/FizjosHematLogo.svg';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
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
            {/* <h1>Blog page</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    );
                })}
            </ol> */}
            <img
                style={{ width: '50vw', margin: '30vh 25vw 0 ' }}
                src={img}
                alt="placehold"
            />
        </Layout>
    );
};

export default BlogPage;
