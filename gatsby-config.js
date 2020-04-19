module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `FizjosHemat`,
                short_name: `FizjosHemat`,
                start_url: `/`,
                icon: `src/images/FizjosHematFavicon.png`,
                display: "standalone",
                crossOrigin: `use-credentials`,
                legacy: false,
            },
        },
    ],
};
