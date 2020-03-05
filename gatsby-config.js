require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages'
      }
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'Dev Life',
        // get this: https://netlify.myshopify.com/admin/apps/private
        accessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
        apiVersion: '2020-01',
        includeCollections: ['shop']
      }
    }
  ]
};