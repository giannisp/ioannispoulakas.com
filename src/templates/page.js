/**
 * @file Page template.
 */

/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const PageTemplate = ({ data }) => {
  const {
    html,
    frontmatter: { title, path },
  } = data.markdownRemark;

  const meta = [];
  if (path === '/private-company/') {
    meta.push({ name: 'robots', content: 'noindex' });
  }

  return (
    <Layout>
      <Helmet title={title} meta={meta} />

      <div className="page">
        <h1 className="page-title">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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

PageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  }),
};

PageTemplate.defaultProps = {
  data: {},
};

export default PageTemplate;
