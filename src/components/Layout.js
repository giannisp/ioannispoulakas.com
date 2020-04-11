/**
 * @file Layout component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';
import Sidebar from './Sidebar';

import '../css/poole.css';
import '../css/syntax.css';
import '../css/hyde.css';
import '../css/custom.css';

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <div className="theme-base-custom">
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        titleTemplate={`%s - ${siteMetadata.title}`}
        defaultTitle={siteMetadata.indexTitle}
        meta={[
          {
            name: 'description',
            content: siteMetadata.description,
          },
          {
            property: 'og:title',
            content: siteMetadata.title,
          },
          {
            property: 'og:description',
            content: siteMetadata.description,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'google-site-verification',
            content: '-afp9E5QbuMeEQi8FhPg-0g_sfaI-ZtjDht6epwGxEI',
          },
        ]}
      />

      <Sidebar
        siteBrand={siteMetadata.brand}
        siteTitle={siteMetadata.title}
        siteDescription={siteMetadata.description}
      />

      <div className="content container">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
