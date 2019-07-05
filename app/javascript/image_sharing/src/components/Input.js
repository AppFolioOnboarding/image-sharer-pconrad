import React from "react";
import { observer } from 'mobx-react'

@observer
export default class Input extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="form-group">
        <label htmlFor={props.name} className="form-label">{props.title}</label>
        <input
          className="form-input"
          id={props.name}
          name={props.name}
          type={'text'}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
      </div>
    );
  }
}

