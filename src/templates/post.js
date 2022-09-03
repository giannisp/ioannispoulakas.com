/**
 * @file Post template.
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
        date: PropTypes.string,
      }),
    }),
  }),
};

const defaultProps = {
  data: {},
};

const PostTemplate = ({ data }) => {
  const {
    html,
    frontmatter: { title, date },
  } = data.markdownRemark;

  return (
    <Layout>
      <div className="mb-16">
        <h1 className="text-gray-800 text-4xl font-bold">{title}</h1>
        <p className="mt-2 mb-8 text-xl text-gray-400">{date}</p>
        <div
          className="prose prose-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`;

PostTemplate.propTypes = propTypes;
PostTemplate.defaultProps = defaultProps;

/* eslint-disable react/prop-types */
export const Head = ({ data }) => {
  const {
    frontmatter: { title },
  } = data.markdownRemark;

  return <Seo title={title} />;
};

export default PostTemplate;
