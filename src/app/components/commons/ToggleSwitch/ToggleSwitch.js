/* @flow */
import React from 'react';
import './ToggleSwitch.scss';

export default class ToggleSwitch extends React.Component {
  handleClick () {
    console.log(this.props);
    this.props.action && this.props.action(this.refs.input.checked);
  }
  render() {
    return (
      <div className={`toggle-switch ${this.props.className}`}>
        <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round"
        type="checkbox" ref="input"
        onClick={(e) => this.handleClick()}/>
        <label htmlFor="cmn-toggle-1"/>
      </div>
    );
  }

  static propTypes = {
    action: React.PropTypes.func
  };
}
