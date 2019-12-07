import React, { Component } from 'react';
import EventContact from './EventContact';

var contact = {
  adress: "Agnietenstraat 13512 XA Utrecht",
  mail: "email@google.com",
  website: "https://testing.com",
  phone: "(+31) 030 23232323"
}

class AppEvent extends Component {
  render() {
    let eventId = this.props.match.params.eventId;
    return (
      <div>
        <h2>{eventId}</h2>
        <EventContact contact={contact} />
      </div>
    );
  }
} 

export default AppEvent;
