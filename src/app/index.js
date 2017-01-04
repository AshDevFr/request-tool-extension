/* @flow weak */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Raven from 'raven-js';

import { sentry_url } from './services/sentry';
import App from './components/App';

import messages from './services/messages';

/* eslint-disable */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// $FlowFixMe
ga('create', 'UA-47272955-4', 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');
ga('send', 'pageview', 'DevtoolsPanel');
/* eslint-enable */

// Raven.config(sentry_url, {
//   tags: {
//     appVersion: __APP_VERSION__,
//     navigator: window.navigator
//   }
// }).install();
// messages.init();

render(<App />, document.getElementById('devtools'));
