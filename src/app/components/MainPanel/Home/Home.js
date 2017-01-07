/* @flow */
import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h2>
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
