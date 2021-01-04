/**
 * @file CookieBanner component.
 */

import useCookie from '../hooks/use-cookie';
import { grantAnalyticsConsent } from '../../plugins/gatsby-gtag-consent';

const CookieBanner = () => {
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
              grantAnalyticsConsent();
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
