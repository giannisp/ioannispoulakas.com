/**
 * @file Seo component.
 */

import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/use-site-metadata';

const propTypes = {
  title: PropTypes.string,
  noIndex: PropTypes.bool,
};

const defaultProps = {
  title: null,
  noIndex: false,
};

const Seo = ({ title, noIndex = false }) => {
  const siteMetadata = useSiteMetadata();

  const seo = {
    title: title ? `${title} - ${siteMetadata.title}` : siteMetadata.indexTitle,
    description: siteMetadata.description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta
        name="google-site-verification"
        content="-afp9E5QbuMeEQi8FhPg-0g_sfaI-ZtjDht6epwGxEI"
      />
      {noIndex && <meta name="robots" content="noindex" />}
    </>
  );
};

Seo.propTypes = propTypes;
Seo.defaultProps = defaultProps;

export default Seo;
