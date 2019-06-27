import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';


const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <input
        className="form-input"
        id={props.name}
        name={props.name}
        type={props.type}
      />
    </div>
  )
}

const Submit = () => {
  return (
    <div className="submit">
      <input value="Submit" type="submit" />
    </div>
  )
}

class FeedbackForm extends React.Component {

  render() {
    return (
      <form>
        <div className="field-list">
          <Input type={'text'} title= {'Name'} name= {'name'} />
          <Input type={'text'} title= {'Comments'} name= {'comments'} />
        </div>
        <Submit />
      </form>
    );
  }
}


class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div className="container">
        <Header title="Tell us what you think" />
        <FeedbackForm />
        <footer style={{ 'fontSize': '10px', 'textAlign': 'center' }}>Copyright: AppFolio Inc. Onboarding</footer>
      </div>
    );
  }
}


export default inject('stores')(App);
