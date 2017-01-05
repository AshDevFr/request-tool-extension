/* @flow */
import React from 'react';
import './ToggleSwitch.scss';

export default class ToggleSwitch extends React.Component {
  handleClick () {
    this.props.action && this.props.action(this.refs.input.checked);
  }
  render() {
    const classes = 'toggle-switch' + (this.props.className ? ` ${this.props.className}` : '');
    return (
      <div className={classes}>
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
