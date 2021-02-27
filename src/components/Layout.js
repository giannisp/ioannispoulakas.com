/**
 * @file Layout component.
 */

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';
import Sidebar from './Sidebar';
import CookieBanner from './CookieBanner';

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <div className="font-body">
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
        siteDescription={siteMetadata.description}
      />

      <div className="max-w-6xl px-12 md:ml-92 md:px-24 py-10">{children}</div>

      <CookieBanner />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
