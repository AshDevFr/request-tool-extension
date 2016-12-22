/* @flow */
export default function evalInPage(code: string, cb: Function) {
  if (chrome && chrome.devtools) {
    chrome.devtools.inspectedWindow.eval(code, cb);
    return;
  }

  let result;
  try {
    result = eval(code);
  } catch (e) {
    cb(undefined, {isException: true, value: e.toString()});
    return;
  }
  cb(result);
}
