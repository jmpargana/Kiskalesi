import React, {Component} from 'react';
import EventContact from './EventContact';
import axios from 'axios';
import moment from 'moment';
import auth0Client from './Auth';

class AppEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };

    this.deleteEvent = this.deleteEvent.bind(this)
  }

  componentDidMount() {
    axios
      .get(
        'http://127.0.0.1:3001/events/' +
          this.props.location.pathname.split('/')[2],
        {},
      )
      .then(res => {
        this.setState({
          event: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  deleteEvent() {
        console.log("Deleting event");
    // axios
    //   .delete(

    //   )
  }

  render() {
    let event = this.state.event;
    return (
      <>
        <div className="parallax-container">
          <div className="parralax">
            <img src={event.img} alt={event.title} style={{width: '100%'}} />
          </div>
        </div>

        <div className="section">
          <div className="row container">
            <div className="col s6">
              <h2>{event.title}</h2>
              <p>{event.about}</p>
              <p>{moment(event.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div className="col s6">
              <EventContact event={event.contact} />
            </div>
          </div>
        </div>

        {auth0Client.isAuthenticated() && (
          <div className="fixed-action-btn">
            <a href="#0" className="btn-floating btn-large red" onClick={this.deleteEvent}>
              <i className="large material-icons">delete</i>
            </a>
          </div>
        )}
      </>
    );
  }
}

export default AppEvent;
