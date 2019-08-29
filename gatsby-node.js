/**
 * @file Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

const { createContent } = require('./src/utils/create-content');
const { createPostsArchive } = require('./src/utils/create-posts-archive');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/404.js'),
  });

  await createContent(graphql, actions);
  await createPostsArchive(graphql, actions);
};
