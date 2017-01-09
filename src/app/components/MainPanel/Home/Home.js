/* @flow */
import React from 'react';
import DomainForm from '../../commons/DomainForm/DomainForm';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h2>
          <DomainForm className="enable" disabled={false} />
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
