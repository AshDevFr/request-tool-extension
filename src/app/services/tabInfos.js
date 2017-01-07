/* @flow */
import { postMessage } from './messages';

export function getTabInfos() {
  console.log('function getTabInfos');
  postMessage({
    type: 'GET_TAB_INFOS'
  }).then(message => {
    console.log('TabInfo result', message);
  });
}
