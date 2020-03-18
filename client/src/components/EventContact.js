import React from 'react';

const EventContact = props => (
  <div className="card blue-grey">
    <div className="card-content">
      <div className="row">
        <span className="white-text">
          <i className="material-icons prefix">phone</i>
          {props.event ? ' ' + props.event.phone : ''}
        </span>
      </div>
      <div className="row">
        <span className="white-text">
          <i className="material-icons prefix">email</i>
          {props.event ? ' ' + props.event.email : ''}
        </span>
      </div>
      <div className="row">
        <span className="white-text">
          <i className="material-icons prefix">place</i>
          {props.event ? ' ' + props.event.address.address : ''}
        </span>
      </div>
      <div className="row">
        <span className="white-text">
          <i className="material-icons prefix">house</i>
          {props.event
            ? ' ' +
              props.event.address.postalCode +
              ' ' +
              props.event.address.city
            : ''}
        </span>
      </div>
      <div className="row">
        <span className="white-text">
          <i className="material-icons prefix">laptop</i>
          {props.event ? ' ' + props.event.website : ''}
        </span>
      </div>
    </div>
  </div>
);

export default EventContact;
