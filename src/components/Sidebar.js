/**
 * @file Sidebar component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';

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
        <a
          href="https://github.com/giannisp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://gr.linkedin.com/in/ipoulakas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/ipoulakas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="mailto:giannis.p@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="/rss.xml" target="_blank">
          <FontAwesomeIcon icon={faRss} />
        </a>
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
