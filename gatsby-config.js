/**
 * @file Gatsby configuration file.
 */

/* eslint-disable babel/camelcase */

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.ioannispoulakas.com',
    brand: 'Ioannis Poulakas',
    title: 'Ioannis Poulakas',
    indexTitle: 'Ioannis Poulakas - Software Developer',
    description: 'Software / Web / iOS Developer',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-89805645-1',
        head: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ioannis Poulakas',
        short_name: 'IP',
        start_url: '/',
        background_color: '#2574a9',
        theme_color: '#2574a9',
        display: 'minimal-ui',
        icon: 'src/images/ip-logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          query SiteMetaForFeed {
            site {
              siteMetadata {
                siteUrl
                title
                description
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => {
                const postUrl = `${site.siteMetadata.siteUrl}${edge.node.frontmatter.path}`;

                return {
                  ...edge.node.frontmatter,
                  date: edge.node.frontmatter.date,
                  url: postUrl,
                  guid: postUrl,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                };
              }),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { fields: [frontmatter___date], order: DESC },
                  filter: { frontmatter: { template: { eq: "post" } } }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Ioannis Poulakas',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
