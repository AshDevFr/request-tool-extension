/* @flow */

function getTab(tabId: number) {
  return new Promise((resolve, reject) => {
    chrome.tabs.get(tabId, resolve);
  });
}

export function getTabInfos(tabId: number) {
  return getTab(tabId);
}
