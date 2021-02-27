/**
 * @file CookieBanner component.
 */

import useCookie from '../hooks/use-cookie';
import { grantAnalyticsConsent } from '../../plugins/gatsby-gtag-consent';

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useCookie('gatsby-gdpr-ga');

  return (
    !cookieConsent && (
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-between px-6 py-2 bg-theme-dark-blue">
        <p className="text-theme-light-blue text-sm pr-4">
          This website uses third party cookies to understand how people are
          interacting with it in order to improve the browsing experience.
        </p>
        <div className="flex text-md">
          <button
            type="button"
            className="rounded p-1.5 bg-theme-light-blue text-theme-darkest-blue"
            onClick={() => {
              setCookieConsent('true', { expires: 365 });
              grantAnalyticsConsent();
            }}
          >
            Accept
          </button>
          <button
            type="button"
            className="rounded p-1.5 bg-theme-darker-blue text-theme-lightest-blue ml-4"
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
