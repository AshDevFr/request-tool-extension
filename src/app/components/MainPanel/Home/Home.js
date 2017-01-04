/* @flow */
import React from 'react';
import ToggleSwitch from '../../commons/ToggleSwitch/ToggleSwitch.js';

export default class Home extends React.Component {
  activate(value) {
    console.log('Activate', value);
  }
  render() {
    return (
      <div className="home-page">
        <h2>
          <ToggleSwitch className="enable" action={this.activate}/>
          Home
        </h2>
        <hr/>
        <p>
          Request Tools is a composant designed to help you developing dynamic web sites.
        </p>
      </div>
    );
  }

  static propTypes = {};
}
