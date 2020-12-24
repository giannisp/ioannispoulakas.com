/**
 * @file CookieBanner component.
 */

import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

import useCookie from '../hooks/use-cookie';

const CookieBanner = () => {
  const location = useLocation();
  const [cookieConsent, setCookieConsent] = useCookie('gatsby-gdpr-ga');

  return (
    !cookieConsent && (
      <div className="cookie-banner">
        <p>
          This website uses third party cookies to understand how people are
          interacting with it in order to improve the browsing experience.
        </p>
        <div className="cookie-banner-button-container">
          <button
            type="button"
            className="cookie-banner-accept"
            onClick={() => {
              setCookieConsent('true', { expires: 365 });
              initializeAndTrack(location);
            }}
          >
            Accept
          </button>
          <button
            type="button"
            className="cookie-banner-reject"
            onClick={() => {
              setCookieConsent('false', { expires: 7 });
            }}
          >
            Reject
          </button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
