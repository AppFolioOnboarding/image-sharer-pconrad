import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';

import {Provider} from 'mobx-react'

import FeedbackStore from './FeedbackStore'
import FeedbackForm from './FeedbackForm'
// import PostFeedbackService from '../services/PostFeedbackService'

import postFeedback from '../services/PostFeedbackService'

class App extends Component {

  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm (event) {
    event.preventDefault();
    postFeedback(FeedbackStore);
    console.log('Sending form', JSON.stringify(FeedbackStore, null, 2));
  }

  render() {
    return (
      <Provider FeedbackStore={FeedbackStore}>
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
