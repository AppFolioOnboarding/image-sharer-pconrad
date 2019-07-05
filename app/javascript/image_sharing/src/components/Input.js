import React from "react";
import {inject, observer} from 'mobx-react'

const Input = observer(["feedbackStore"], (props) => {
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
);

export default Input;
