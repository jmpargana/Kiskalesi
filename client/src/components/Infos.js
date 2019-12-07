import React from 'react';
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';


const Infos = (props) => {
  const eventId = props.match.params.eventId;
  return (eventId) ? (
    <Router>
      <Redirect to={'/location/' + eventId} />
    </Router>
  ) : (
    <h1>Infos</h1>
  );
}


export default Infos;
