/* @flow */
import { postMessage } from './messages';

export function getTabInfos() {
  postMessage({
    type: 'GET_TAB_INFOS'
  }).then(tabInfos => {
    console.log('TabInfos', tabInfos);
  });
}
