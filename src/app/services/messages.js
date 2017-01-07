/* @flow */
let messagePort = {};
let processQueue = {};

function handleMessage(message, sender, sendResponse) {
  switch (message.type) {
    case 'REQUEST_LOG':
      if (message.data) {
        console.log('Request log', message.data);
      }
      break;
    case 'MESSAGE_RESPONSE':
      if (message.processId && processQueue[message.processId]) {
        processQueue[message.processId](message.data);
        delete processQueue[message.processId];
        return true;
      }
  }
}

export function init() {
  messagePort = chrome.runtime.connect({name: 'requestToolMessagePort'});
  messagePort.onMessage.addListener(handleMessage);
  messagePort.postMessage({
    type: 'INIT_CONNECTION',
    tabId: chrome.devtools.inspectedWindow.tabId
  });
}

export function postMessage(message: Object) {
  return new Promise(resolve => {
    const id = Math.random().toString(36).substring(7);
    processQueue[id] = resolve;
    chrome.runtime.sendMessage({
      ...message,
      tabId: chrome.devtools.inspectedWindow.tabId,
      processId: id
    }, (message) => {
      if (message) {
        resolve(message.data || message);
      }
    });
  });
}
