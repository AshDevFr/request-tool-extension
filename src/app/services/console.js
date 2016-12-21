/* @flow */
import evalInPage from './evalInPage';

export default {
  log: function (msg: string) {
    evalInPage(`console.log('${msg}')`, (result, err) => {
      if (err)
        console.error(err);
    });
  },
  warn: function (msg: string) {
    evalInPage(`console.warn('${msg}')`, (result, err) => {
      if (err)
        console.error(err);
    });
  },
  error: function (msg: string) {
    evalInPage(`console.error('${msg}')`, (result, err) => {
      if (err)
        console.error(err);
    });
  }
};
