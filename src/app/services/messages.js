/* @flow */
import chromeConsole from './console';

exports.init = function () {
  console.log('Init message listener');
  let port = chrome.runtime.connect({name:'messagePort'});
  port.onMessage.addListener(function(message, sender){
    console.log(message, sender);
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request) {
        console.log('tab request', request);
        chromeConsole.log('request');
        sendResponse('ok');
      }
    });
};
