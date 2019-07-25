'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/enclosures/',
};

const config = {
  ...backstop,
  viewports: [
    {
      name: 'desktop',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'entire-document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'single block',
      selectors: ['#qa-block'],
    },
  ],
};

module.exports = config;
