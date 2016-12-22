/* @flow */
import evalInPage from './evalInPage';

export default {
  log: (msg: string) => {
    evalInPage(`console.log('${msg}')`, (result, err) => {
      if (err)
        console.error(err);
    });
  },
  warn: (msg: string) => {
    evalInPage(`console.warn('${msg}')`, (result, err) => {
      if (err)
        console.error(err);
    });
  },
  error: (msg: string) => {
    evalInPage(`console.error('${msg}')`, (result, err) => {
      if (err)
        console.error(err);
    });
  }
};
