import React, {Component} from 'react';
import EventContact from './EventContact';
import axios from 'axios';
import moment from 'moment';
import auth0Client from './Auth';
import SimpleMap from './testmap';
import i18n from '../i18n';
import M from 'materialize-css';

const API = "https://kizkalesi.herokuapp.com/events/"

class AppEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };

    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        API +
          this.props.location.pathname.split('/')[2],
        {},
      )
      .then(res => {
        this.setState({
          event: res.data,
        });
      })
      .catch(err => console.log(err));

    M.AutoInit();
  }

  deleteEvent() {
    axios
      .delete(
        API +
          this.props.location.pathname.split('/')[2],
      )
      .catch(err => console.log(err));

    window.location = '/';
  }

  render() {
    let event = this.state.event;
    const getCurrentLng = () => i18n.language || '';

    return (
      <>
        <div className="parallax-container">
          <div className="parralax">
            <div className="row">
              <div className="col no-padding">
                <img
                  className="materialboxed"
                  src={event.img}
                  alt={event.title}
                  style={{width: '100%'}}
                />
              </div>
              <div>
                <SimpleMap
                  height="500px"
                  width="600px"
                  calledPin={event.center}
                  text={
                    event[getCurrentLng()] ? event[getCurrentLng()].title : ''
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row container">
            <div className="col s3">
              <EventContact event={event.contact} />
            </div>
            <div className="col s9">
              <h2>
                {event[getCurrentLng()] ? event[getCurrentLng()].title : ''}
              </h2>
              <p>
                {event[getCurrentLng()] ? event[getCurrentLng()].about : ''}
              </p>
              <p>{moment(event.date).format('MMMM Do YYYY')}</p>
            </div>
          </div>
        </div>

        {auth0Client.isAuthenticated() && (
          <div className="fixed-action-btn">
            <a
              href="#0"
              className="btn-floating btn-large red"
              onClick={this.deleteEvent}>
              <i className="large material-icons">delete</i>
            </a>
          </div>
        )}

        <div style={{marginBottom: '1%'}}></div>
      </>
    );
  }
}

export default AppEvent;
