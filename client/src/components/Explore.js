import React from 'react';
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

const Explore = (props) => {
  const eventId = props.match.params.eventId;
  return (eventId) ? (
    <Router>
      <Redirect to={'/location/' + eventId} />
    </Router>
  ) : (
    <h1>Explore</h1>
  );
}

export default Explore;
