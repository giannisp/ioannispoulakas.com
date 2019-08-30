/**
 * @file IconLink component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ url, icon }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} />
  </a>
);

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.shape().isRequired,
};

export default IconLink;
