/* @flow */
import React, { Component, PropTypes } from 'react';
import './App.less';

import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>Request tools</header>
        <SidePanel></SidePanel>
        <MainPanel></MainPanel>
      </div>
    );
  }
}
