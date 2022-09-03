/**
 * @file Layout component.
 */

import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/use-site-metadata';
import Sidebar from './Sidebar';
import CookieBanner from './CookieBanner';

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <div className="font-body">
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
