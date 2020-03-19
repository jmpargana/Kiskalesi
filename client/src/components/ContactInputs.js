import React from 'react';

export const ContactInput = props => (
  <div className="row">
    <div className="input-field col s12">
      <i className="material-icons prefix">{props.icon}</i>
      <input
        type="text"
        required
        id={props.id}
        className="validate"
        name={props.name}
        value={props.state}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  </div>
);
