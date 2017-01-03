/* @flow */

export default {
  get,
  set
};

function get(key: string) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, function(value) {
      if (chrome.runtime.error) {
        reject(chrome.runtime.lastError);
      }
      resolve(value);
    });
  });
}

function set(key: string, value: any) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set({key: value}, function() {
      if (chrome.runtime.error) {
        reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
}