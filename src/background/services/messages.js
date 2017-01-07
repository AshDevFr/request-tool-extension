/* @flow */
import { getTabInfos } from './tabInfos';

let messagePort = {};

function handleMessage(message, sender, sendResponse) {
  sendResponse = sendResponse || ((msg) => {
    console.log('sendResponse', message.tabId);
    chrome.tabs.sendMessage(message.tabId, msg);
  });
  console.log(message, sender, sendResponse);
  switch (message.type) {
    case 'GET_TAB_INFOS':
      getTabInfos(message.tabId).then(tabinfos => {
        console.log({
          processId: message.processId,
          type: 'MESSAGE_RESPONSE',
          data: tabinfos
        });
        sendResponse({
          processId: message.processId,
          type: 'MESSAGE_RESPONSE',
          data: tabinfos
        });
      });
  }
  return true;
}

export function init() {
  chrome.runtime.onConnect.addListener(port => {
    messagePort = port;
    messagePort.onMessage.addListener(handleMessage);
    messagePort.onDisconnect.addListener(() => {
      messagePort.onMessage.removeListener(handleMessage);
      messagePort = {};
    });
  });

  // chrome.webRequest.onBeforeRequest.addListener(details => {
  //   console.log(details, messagePort);
  //
  //   messagePort && messagePort.postMessage({
  //     type: 'REQUEST_LOG',
  //     data: details
  //   });
  //   if (details && details.tabId)
  //     chrome.tabs.sendMessage(details.tabId, {
  //       type: 'REQUEST_LOG',
  //       data: details
  //     }, response => {
  //       console.log('Response', response);
  //     });
  // }, {
  //   urls: ['*://*/*']
  // });
}
