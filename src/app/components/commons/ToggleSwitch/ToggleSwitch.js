/* @flow */
import React from 'react';
import './ToggleSwitch.scss';

export default class ToggleSwitch extends React.Component {
  handleClick = e => {
    this.props.action && this.props.action(e.target.checked);
  };

  render() {
    const classes = 'toggle-switch' + (this.props.className ? ` ${this.props.className}` : '');
    const id = `switch-${Math.random().toString(36).substring(7)}`;
    return (
      <div className={classes}>
        <input id={id} className="cmn-toggle cmn-toggle-round"
        type="checkbox"
        onClick={this.handleClick}/>
        <label htmlFor={id}/>
      </div>
    );
  }

  static propTypes = {
    action: React.PropTypes.func
  };
}
