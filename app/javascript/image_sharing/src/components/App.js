import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';

class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <Header title="Tell us what you think" />
        /* Put your components here: Flash Message, Form, Footer */
        <footer style={{ 'fontSize': '10px', 'textAlign': 'center' }}>Copyright: AppFolio Inc. Onboarding</footer>
      </div>
    );
  }
}

export default inject('stores')(App);
