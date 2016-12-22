/* @flow */

let messagePort;

chrome.runtime.onConnect.addListener(port => {
  console.log('New message port');
  messagePort = port;
  messagePort.onDisconnect.addListener(() => {
    messagePort = null;
  });
});

chrome.webRequest.onBeforeRequest.addListener(details => {
  console.log(details, messagePort);

  messagePort && messagePort.postMessage({request: details});
  if (details && details.tabId)
    chrome.tabs.sendMessage(details.tabId, {request: details}, response => { 
      console.log('Response', response);
    });
}, {
  urls: ['*://*/*']
});
