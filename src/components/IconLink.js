/**
 * @file IconLink component.
 */

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl mr-4 last:mr-0"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.shape().isRequired,
};

export default IconLink;
