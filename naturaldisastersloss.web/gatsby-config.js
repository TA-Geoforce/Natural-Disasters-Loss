module.exports = {
  siteMetadata: {
    title: "Natural Disasters Loss",
    author: "Christos Charmatzis",
    description: "This is the website of Natural Disasters Loss (previous Tornadoes Loss)"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'natural-disasters-loss',
        short_name: 'starter',
        start_url: '/',
        background_color: '#242943',
        theme_color: '#242943',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
  pathPrefix: `/data`,
}
