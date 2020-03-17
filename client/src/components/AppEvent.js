import React, {Component} from 'react';
import EventContact from './EventContact';
import axios from 'axios';
import moment from 'moment';

var contact = {
  adress: 'Agnietenstraat 13512 XA Utrecht',
  mail: 'email@google.com',
  website: 'https://testing.com',
  phone: '(+31) 030 23232323',
};

class AppEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
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
      </>
    );
  }
}

export default AppEvent;
