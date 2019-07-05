import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';

import {observable, action} from 'mobx'
import {observer, Provider} from 'mobx-react'

import feedbackStore from './feedbackStore'
import FeedbackForm from './FeedbackForm'

class App extends Component {

  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm (event) {
    event.preventDefault()
    console.log('Sending form', JSON.stringify(feedbackStore, null, 2))
  }

  render() {
    return (
      <Provider feedbackStore={feedbackStore}>
        <div className="container">
          <Header title="Tell us what you think" />
          <FeedbackForm onClick={this.submitForm}/>
          <footer style={{ 'fontSize': '10px', 'textAlign': 'center' }}>Copyright: AppFolio Inc. Onboarding</footer>
        </div>
      </Provider>
    );
  }
}

export default inject('stores')(App);
