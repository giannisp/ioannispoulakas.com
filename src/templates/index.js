/**
 * @file Post template.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

const IndexTemplate = ({ data, pageContext }) => {
  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      {currentPage > 1 && (
        <Helmet title={`Posts Archive - Page ${currentPage}`} />
      )}

      <div className="posts">
        {edges.map(({ node: { frontmatter: { path, title, date } } }) => (
          <div className="post" key={path}>
            <h1 className="post-title">
              <Link to={path}>{title}</Link>
            </h1>

            <span className="post-date">{date}</span>
          </div>
        ))}
      </div>

      <div className="pagination">
        {hasNextPage && (
          <Link to={nextPagePath} className="pagination-item older">
            Older
          </Link>
        )}
        {!hasNextPage && <span className="pagination-item older">Older</span>}
        {hasPrevPage && (
          <Link to={prevPagePath} className="pagination-item newer">
            Newer
          </Link>
        )}
        {!hasPrevPage && <span className="pagination-item newer">Newer</span>}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`;

IndexTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({ edges: PropTypes.array }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    hasNextPage: PropTypes.bool,
    hasPrevPage: PropTypes.bool,
    prevPagePath: PropTypes.string,
    nextPagePath: PropTypes.string,
  }),
};

IndexTemplate.defaultProps = {
  data: {},
  pageContext: {},
};

export default IndexTemplate;
