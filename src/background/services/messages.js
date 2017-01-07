/* @flow */
import {getTabInfos} from './tabInfos';

let connections = {};

function handleMessage(message, sender, sendResponse) {
  switch (message.type) {
    case 'INIT_CONNECTION':
      connections[message.tabId] = sender;
      break;
    case 'GET_TAB_INFOS':
      getTabInfos(message.tabId).then(tabinfos => {
        sendResponse && sendResponse({
          processId: message.processId,
          type: 'MESSAGE_RESPONSE',
          data: tabinfos
        });
      });
      return true;
  }
}

export function init() {
  chrome.runtime.onMessage.addListener(handleMessage);
  chrome.runtime.onConnect.addListener(port => {
    if (port.name !== 'requestToolMessagePort')
      return;

    port.onMessage.addListener(handleMessage);
    port.onDisconnect.addListener(() => {
      port.onMessage.removeListener(handleMessage);
      const tabs = Object.keys(connections);
      for (let i=0; i < tabs.length; i++) {
        if (connections[tabs[i]] === port) {
          delete connections[tabs[i]];
          break;
        }
      }
    });
  });
}

export function postMessage(tabId: number, message: Object, callback: Function) {
  connections && connections[tabId] && connections[tabId].postMessage(message, callback);
}
