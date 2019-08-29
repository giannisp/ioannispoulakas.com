/**
 * @file Create posts archive util.
 */

const path = require('path');

const POSTS_PER_PAGE = 5;

const createPostsArchive = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    query PostsForPagination {
      allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
        totalCount
      }
    }
  `);

  const totalPages = Math.ceil(
    result.data.allMarkdownRemark.totalCount / POSTS_PER_PAGE,
  );

  [...Array(totalPages).keys()].map(index =>
    createPage({
      path: index === 0 ? '/' : `/page/${index + 1}`,
      component: path.resolve('./src/templates/index.js'),
      context: {
        currentPage: index + 1,
        postsLimit: POSTS_PER_PAGE,
        postsOffset: index * POSTS_PER_PAGE,
        prevPagePath: index <= 1 ? '/' : `/page/${index}`,
        nextPagePath: `/page/${index + 2}`,
        hasPrevPage: index !== 0,
        hasNextPage: index !== totalPages - 1,
      },
    }),
  );
};

exports.createPostsArchive = createPostsArchive;
