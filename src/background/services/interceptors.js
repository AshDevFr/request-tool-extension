/* @flow */
import {postMessage} from './messages';

export function init() {
  chrome.webRequest.onBeforeRequest.addListener(details => {
    if (details && details.tabId) {
      postMessage(details.tabId, {
        type: 'REQUEST_LOG',
        data: details
      });
    }
  }, {
    urls: ['*://*/*']
  });
}