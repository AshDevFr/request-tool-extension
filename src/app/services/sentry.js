import Raven from 'raven-js';

const sentry_key = '26535e0ec63c4ac3a1dc938ba729c0ae';
const sentry_app = '126421';

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_key}`;

export function logException(ex, context) {
  Raven.captureException(pageXOffset, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}