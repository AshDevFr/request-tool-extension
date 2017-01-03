/* @flow */
import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import './App.less';

import Home from './MainPanel/Home/Home';
import Rules from './MainPanel/Rules/Rules';
import Logs from './MainPanel/Logs/Logs';
import Help from './MainPanel/Help/Help';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body-container">
          <div className="header">
            <h1>Request tools</h1>
          </div>
          <div className="container">
            <div className="side-panel">
              <ul>
                <li><Link activeOnlyWhenExact activeClassName="active" to="/"><span>HOME</span></Link></li>
                <li><Link activeClassName="active" to="/Rules"><span>RULES</span></Link></li>
                <li><Link activeClassName="active" to="/Logs"><span>LOGS</span></Link></li>
                <li><Link activeClassName="active" to="/Help"><span>HELP</span></Link></li>
              </ul>
            </div>
            <div className="main-panel">
              <Match exactly pattern="/" component={Home} />
              <Match exactly pattern="/rules" component={Rules} />
              <Match exactly pattern="/logs" component={Logs} />
              <Match exactly pattern="/help" component={Help} />
              <Miss component={Home} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
