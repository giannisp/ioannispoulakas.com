/**
 * @file Post template.
 */

import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape),
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    hasNextPage: PropTypes.bool,
    hasPrevPage: PropTypes.bool,
    prevPagePath: PropTypes.string,
    nextPagePath: PropTypes.string,
  }),
};

const defaultProps = {
  data: {},
  pageContext: {},
};

const IndexTemplate = ({ data, pageContext }) => {
  const { hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pageContext;

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <div>
        {edges.map(
          ({
            node: {
              frontmatter: { path, title, date },
            },
          }) => (
            <div className="mb-12" key={path}>
              <h1 className="text-theme-blue text-4xl font-bold">
                <Link to={path}>{title}</Link>
              </h1>

              <p className="mt-2 text-xl text-gray-400">{date}</p>
            </div>
          ),
        )}
      </div>

      <div className="mt-16 mb-24 sm:mb-16 flex text-center text-xl">
        {hasNextPage && (
          <Link
            to={nextPagePath}
            className="w-6/12 p-3 border-t border-b border-l rounded-tl rounded-bl border-gray-200 text-theme-blue hover:bg-gray-100"
          >
            Older
          </Link>
        )}
        {!hasNextPage && (
          <span className="w-6/12 p-3 border-t border-b border-l rounded-tl rounder-bl border-gray-200 text-gray-400">
            Older
          </span>
        )}
        {hasPrevPage && (
          <Link
            to={prevPagePath}
            className="w-6/12 p-3 border border-gray-200 rounded-tr rounded-br text-theme-blue hover:bg-gray-100"
          >
            Newer
          </Link>
        )}
        {!hasPrevPage && (
          <span className="w-6/12 p-3 border border-gray-200 rounded-tr rounded-br text-gray-400">
            Newer
          </span>
        )}
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
      sort: { frontmatter: { date: DESC } }
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

IndexTemplate.propTypes = propTypes;
IndexTemplate.defaultProps = defaultProps;

/* eslint-disable react/prop-types */
export const Head = ({ pageContext }) => {
  const { currentPage } = pageContext;
  const title =
    currentPage > 1 ? `Posts Archive - Page ${currentPage}` : undefined;

  return <Seo title={title} />;
};

export default IndexTemplate;
