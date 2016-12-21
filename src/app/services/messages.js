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
      console.log('tab request', request);
      if (request) {
        chromeConsole.log('request');
        sendResponse('ok');
      }
    });
};
