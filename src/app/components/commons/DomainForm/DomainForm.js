/* @flow */
import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './DomainForm.scss';

export default class DomainForm extends React.Component {
  activate(value: boolean) {
    console.log('Activate', value);
  }
  render() {
    const classes = 'domain-from' + (this.props.className ? ` ${this.props.className}` : '');
    return (
      <div className={classes}>
        <span className={`tag is-medium ${this.props.disabled ? 'is-white disabled' : 'is-primary'}`}>http://localhost:3000</span>
        <ToggleSwitch action={(value) => {this.activate(value);}} disabled={this.props.disabled} />
      </div>
    );
  }

  static propTypes = {
    disabled: React.PropTypes.bool
  };
}
