(function () {
  'use strict';

  console.log('Hi there!');

  chrome.webRequest.onBeforeRequest.addListener(function (details) {
    console.log(details);
  }, {
    urls: ['*://*/*']
  });
})();
