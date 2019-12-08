import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const EventContact = props => (
  <React.Fragment>
    <Paper>
      <Typography variant="h5" component="h3">
        Contact
      </Typography>
      <Typography component="p">{props.contact.adress}</Typography>
    </Paper>
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
  </React.Fragment>
);

export default EventContact;
