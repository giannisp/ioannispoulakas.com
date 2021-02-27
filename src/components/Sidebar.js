/**
 * @file Sidebar component.
 */

import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';

import IconLink from './IconLink';

const Sidebar = ({ siteBrand, siteDescription }) => (
  <div className="text-center md:text-left md:fixed md:w-92 md:inset-0 px-10 py-5 bg-theme-blue text-white">
    <div>
      <div>
        <h1 className="text-3xl font-title font-bold">
          <Link to="/">{siteBrand}</Link>
        </h1>
        <p className="mt-4 text-2xl text-white text-opacity-50 leading-tight">
          {siteDescription}
        </p>
      </div>

      <nav className="mt-5 text-xl">
        <Link className="block" activeClassName="font-bold" to="/">
          Blog
        </Link>
        <Link className="block mt-2" activeClassName="font-bold" to="/about/">
          About
        </Link>
      </nav>

      <div className="flex mt-5 justify-center md:justify-start last:mr-0">
        <IconLink url="https://github.com/giannisp" icon={faGithub} />
        <IconLink
          url="https://gr.linkedin.com/in/ipoulakas"
          icon={faLinkedin}
        />
        <IconLink url="https://twitter.com/ipoulakas" icon={faTwitter} />
        <IconLink url="mailto:giannis.p@gmail.com" icon={faEnvelope} />
        <IconLink url="/rss.xml" icon={faRss} />
      </div>

      <p className="text-lg text-white text-opacity-50 mt-5">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </p>

      <p>
        <Link to="/private-company/">Private Company</Link>
      </p>
    </div>
  </div>
);

Sidebar.propTypes = {
  siteBrand: PropTypes.string,
  siteDescription: PropTypes.string,
};

Sidebar.defaultProps = {
  siteBrand: '',
  siteDescription: '',
};

export default Sidebar;
