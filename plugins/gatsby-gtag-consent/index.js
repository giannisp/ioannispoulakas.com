/**
 * @file gatsby-gtag-consent plugin helpers.
 */

const env = process.env.NODE_ENV || 'development';

export const isEnvironmentValid = (environments) => environments.includes(env);

export const grantAnalyticsConsent = () => {
  if (window.gtag) {
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'granted',
    });
  }
};
