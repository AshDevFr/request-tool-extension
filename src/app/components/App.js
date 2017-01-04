/* @flow */
import React, {Component, PropTypes} from 'react';
import {BrowserRouter, Match, Miss, Link} from 'react-router';
import './App.scss';

import Home from './MainPanel/Home/Home';
import Rules from './MainPanel/Rules/Rules';
import Logs from './MainPanel/Logs/Logs';
import Help from './MainPanel/Help/Help';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <section className="hero is-primary is-bold header">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Request Tools
                </h1>
              </div>
            </div>
          </section>
          <div className="columns">
            <div className="column is-one-quarter side-panel">
              <aside className="menu">
                {/*<p className="menu-label">*/}
                {/*General*/}
                {/*</p>*/}
                <ul className="menu-list">
                  <li><Link activeOnlyWhenExact activeClassName="is-active" to="/"><span>HOME</span></Link></li>
                  <li><Link activeClassName="is-active" to="/Rules"><span>RULES</span></Link></li>
                  <li><Link activeClassName="is-active" to="/Logs"><span>LOGS</span></Link></li>
                  <li><Link activeClassName="is-active" to="/Help"><span>HELP</span></Link></li>
                </ul>
              </aside>
            </div>
            <div className="column main-panel content">
              <Match exactly pattern="/" component={Home}/>
              <Match exactly pattern="/rules" component={Rules}/>
              <Match exactly pattern="/logs" component={Logs}/>
              <Match exactly pattern="/help" component={Help}/>
              <Miss component={Home}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
