/* @flow */
import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h2>
          <div className="switch enable">
            <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round" type="checkbox"/>
            <label htmlFor="cmn-toggle-1"/>
          </div>
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
