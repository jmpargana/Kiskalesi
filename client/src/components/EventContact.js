import React from 'react';

const EventContact = props => (
  <div className="card bg-light">
    <div className="card-body">
      <h3 className="card-title">Contact</h3>
      <div className="card-text">
        <p>{props.contact.adress}</p>
        <p>{props.contact.mail}</p>
        <p>{props.contact.phone}</p>
        <a href={props.contact.website} className="card-link">
          {props.contact.website}
        </a>
      </div>
    </div>
  </div>
);

export default EventContact;
