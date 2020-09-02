module.exports = {
    siteMetadata: {
        author: 'Lemme-Do',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 800,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Fizjos Hemat`,
                short_name: `Fizjos Hemat`,
                description: `The application does cool things and makes your life better.`,
                lang: `en`,
                display: 'standalone',
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#fff`,
                icon: `src/images/FizjosHematFavicon.png`,
                icon_options: {
                    purpose: `maskable`,
                },
                cache_busting_mode: `none`,
            },
        },
    ],
};
