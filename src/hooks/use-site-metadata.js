/**
 * @file SiteMetadata hook.
 */
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            brand
            title
            indexTitle
            description
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
