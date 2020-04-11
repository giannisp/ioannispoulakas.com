/**
 * @file Post template.
 */

/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const PostTemplate = ({ data }) => {
  const {
    html,
    frontmatter: { title, date },
  } = data.markdownRemark;

  return (
    <Layout>
      <Helmet title={title} />

      <div className="page">
        <h1 className="page-title">{title}</h1>
        <span className="post-date">{date}</span>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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

PostTemplate.propTypes = {
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

PostTemplate.defaultProps = {
  data: {},
};

export default PostTemplate;
