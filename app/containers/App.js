import React, { Component, PropTypes } from 'react';
import ContactListContainer from './ContactListContainer'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <ContactListContainer/>
      </div>
    );
  }
}
