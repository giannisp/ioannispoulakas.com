/**
 * @file gatsby-browser for gatsby-gtag-consent plugin.
 */

import Cookies from 'js-cookie';

import { isEnvironmentValid, grantAnalyticsConsent } from './index';

export const onClientEntry = (_, pluginOptions = {}) => {
  if (!window.gtag) {
    return;
  }

  const { cookieName } = pluginOptions;

  const cookieConsent = Cookies.get(cookieName);

  if (cookieConsent === 'true') {
    grantAnalyticsConsent();
  }
};

export const onRouteUpdate = ({ location }, pluginOptions = {}) => {
  const { environments = [] } = pluginOptions;

  if (!isEnvironmentValid(environments) || !window.gtag) {
    return;
  }

  const sendPageView = () => {
    if (!location) {
      return;
    }

    const pagePath = `${location.pathname}${location.search}${location.hash}`;

    window.gtag(`event`, `page_view`, { page_path: pagePath });
  };

  if (window.requestAnimationFrame) {
    requestAnimationFrame(() => {
      requestAnimationFrame(sendPageView);
    });
  } else {
    setTimeout(sendPageView, 32);
  }
};
