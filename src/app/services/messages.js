/* @flow */
import chromeConsole from './console';
let messagePort = {};
let processQueue = {};

function handleMessage(message, sender, sendResponse) {
  sendResponse = sendResponse || messagePort.postMessage;
  console.log(message, sender, sendResponse);
  switch (message.type) {
    case 'REQUEST_LOG':
      if (message.data) {
        sendResponse({data: 'ok'});
      }
      break;
    case 'MESSAGE_RESPONSE':
      if (message.processId && processQueue[message.processId]) {
        processQueue[message.processId](message.data);
        delete processQueue[message.processId];
      }
  }
  return true;
}

export function init() {
  messagePort = chrome.runtime.connect({name: 'requestToolMessagePort'});
  messagePort.onMessage.addListener(handleMessage);
  chrome.runtime.onMessage.addListener(handleMessage);
};

export function postMessage(message: Object) {
  return new Promise(resolve => {
    const id = Math.random().toString(36).substring(7);
    processQueue[id] = resolve;
    console.log('PostMessage', {
      ...message,
      tabId: chrome.devtools.inspectedWindow.tabId,
      processId: id
    });
    messagePort.postMessage({
      ...message,
      tabId: chrome.devtools.inspectedWindow.tabId,
      processId: id
    });
  });
}
