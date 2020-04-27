module.exports = {
  siteMetadata: {
    title: `Awan Studio`,
    description: `Awan Studio is a recording studio located on the beautiful island of Bali. We are primarily a music production facility. 
    We record, mix, and master singles, demos, and full-length albums for producers and musicians. We specialize in walking our clients through the entire process of creating an album. 
    Let us use our years of experience to help you get the best product possible.`,
    keywords: 'recording studio, recording studio bali, mixing, mastering, mixing bali, bali music, bali music studio, studio music, mastering bali, recording, audio, sound engineer, recording bali',
    author: `@awanStudio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
