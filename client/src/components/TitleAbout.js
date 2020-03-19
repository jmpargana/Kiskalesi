import React from 'react';

export const TitleAbout = props => (
  <div className="col s3">
    <h5>{props.lang}</h5>
    <div className="row">
      <div className="input-field col s12">
        <input
          type="text"
          id={props.titleId}
          required
          className="validate"
          name={props.titleName}
          value={props.titleValue}
          onChange={props.onChange}
        />
        <label htmlFor={props.titleId}>{props.title}</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input
          type="text"
          id={props.aboutId}
          required
          name={props.aboutName}
          className="validate"
          value={props.aboutValue}
          onChange={props.onChange}
        />
        <label htmlFor={props.aboutId}>{props.about}</label>
      </div>
    </div>
  </div>
);
