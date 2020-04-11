/**
 * @file 404 page template.
 */

import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

const PageNotFoundTemplate = () => (
  <Layout>
    <Helmet title="404 - Page not found" />

    <div className="page">
      <h1 className="page-title">404: Page not found</h1>
      <div>
        Sorry, we&rsquo;ve misplaced that URL or it&rsquo;s pointing to
        something that doesn&rsquo;t exist. <Link to="/">Head back home</Link>{' '}
        to try finding it again.
      </div>
    </div>
  </Layout>
);

export default PageNotFoundTemplate;
