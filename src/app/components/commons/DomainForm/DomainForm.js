/* @flow */
import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.js';

export default class DomainForm extends React.Component {
  activate(value: boolean) {
    console.log('Activate', value);
  }
  render() {
    return (
      <div className="domain-from">
        <ToggleSwitch className="enable" action={this.activate}/>
      </div>
    );
  }

  static propTypes = {};
}
