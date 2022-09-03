/**
 * @file Page template.
 */

/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
};

const defaultProps = {
  data: {},
};

const PageTemplate = ({ data }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <Layout>
      <div className="mb-16">
        <h1 className="text-gray-800 text-4xl font-bold mb-4">{title}</h1>
        <div
          className="prose prose-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

PageTemplate.propTypes = propTypes;
PageTemplate.defaultProps = defaultProps;

/* eslint-disable react/prop-types */
export const Head = ({ data }) => {
  const {
    frontmatter: { title, path },
  } = data.markdownRemark;

  return <Seo title={title} noIndex={path === '/private-company/'} />;
};

export default PageTemplate;
