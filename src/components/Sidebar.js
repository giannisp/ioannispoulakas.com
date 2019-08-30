/**
 * @file Sidebar component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';

import IconLink from './IconLink';

const Sidebar = ({ siteBrand, siteTitle, siteDescription }) => (
  <div className="sidebar">
    <div className="container sidebar-sticky">
      <div className="sidebar-about">
        <h1>
          <Link to="/">{siteBrand}</Link>
        </h1>
        <p className="lead">{siteTitle}</p>
        <p className="lead lead-small">{siteDescription}</p>
      </div>

      <nav className="sidebar-nav">
        <Link className="sidebar-nav-item" activeClassName="active" to="/">
          Blog
        </Link>
        <Link
          className="sidebar-nav-item"
          activeClassName="active"
          to="/about/"
        >
          About
        </Link>
      </nav>

      <div className="social-container">
        <IconLink url="https://github.com/giannisp" icon={faGithub} />
        <IconLink
          url="https://gr.linkedin.com/in/ipoulakas"
          icon={faLinkedin}
        />
        <IconLink url="https://twitter.com/ipoulakas" icon={faTwitter} />
        <IconLink url="mailto:giannis.p@gmail.com" icon={faEnvelope} />
        <IconLink url="/rss.xml" icon={faRss} />
      </div>

      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    </div>
  </div>
);

Sidebar.propTypes = {
  siteBrand: PropTypes.string,
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Sidebar.defaultProps = {
  siteBrand: '',
  siteTitle: '',
  siteDescription: '',
};

export default Sidebar;
