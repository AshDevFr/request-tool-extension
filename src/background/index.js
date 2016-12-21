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
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log(tabs, details);
    if (tabs[0])
      chrome.tabs.sendMessage(tabs[0].id, {request: details}, function(response) {
        console.log('Response', response);
      });
  });
}, {
  urls: ['*://*/*']
});
