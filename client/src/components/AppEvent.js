import React, {Component} from 'react';
import EventContact from './EventContact';
import axios from 'axios';
import moment from 'moment';
import auth0Client from './Auth';
import SimpleMap from './testmap';

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
            <div className="row">
              <div className="col no-padding">
                <img src={event.img} alt={event.title} style={{width: '100%'}} />
              </div>
              <div>
                <SimpleMap height="500px" width="600px" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row container">
            <div className="">
              <EventContact event={event.contact} />
            </div>
            <div className="col offset-s2">
              <h2>{event.title}</h2>
              <p>{event.about}</p>
              <p>{moment(event.date).format('MMMM Do YYYY')}</p>
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

        <div style={{marginBottom: "1%"}}></div>
      </>
    );
  }
}

export default AppEvent;
