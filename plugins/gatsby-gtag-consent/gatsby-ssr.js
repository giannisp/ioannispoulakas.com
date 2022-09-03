/**
 * @file gatsby-ssr for gatsby-gtag-consent plugin.
 */

/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-danger */

import React from 'react';

import { isEnvironmentValid } from './index';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions = {}) => {
  const { environments = [], trackingId } = pluginOptions;

  if (!isEnvironmentValid(environments) || !trackingId) {
    return null;
  }

  const renderHtml = () => `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied'
    });

    gtag('config', '${trackingId}', {
      anonymize_ip: true,
      send_page_view: false
    });
  `;

  return setPostBodyComponents([
    <script
      async
      key="gatsby-gtag-consent"
      src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
    />,
    <script
      key="gatsby-gtag-consent"
      dangerouslySetInnerHTML={{ __html: renderHtml() }}
    />,
  ]);
};
