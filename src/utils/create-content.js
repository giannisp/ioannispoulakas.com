/**
 * @file Create content util.
 */

const path = require('path');

const createContent = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    query content {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 9999) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `);

  const pageTemplate = path.resolve('./src/templates/page.js');
  const postTemplate = path.resolve('./src/templates/post.js');

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component:
        node.frontmatter.template === 'page' ? pageTemplate : postTemplate,
    });
  });
};

exports.createContent = createContent;
