/* @flow */

let messagePort;

chrome.runtime.onConnect.addListener(function(port){
  console.log('New message port');
  messagePort = port;
  messagePort.onDisconnect.addListener(function () {
    messagePort = null;
  });
});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
  console.log(details, messagePort);

  messagePort && messagePort.postMessage({request: details});
  if (details && details.tabId)
    chrome.tabs.sendMessage(details.tabId, {request: details}, function(response) {
      console.log('Response', response);
    });
}, {
  urls: ['*://*/*']
});
