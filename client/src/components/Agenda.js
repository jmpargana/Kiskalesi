import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Translation} from 'react-i18next';

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:3001/events', {})
      .then(res => {
        this.setState({
          events: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const eventId = this.props.match.params.eventId;
    return eventId ? (
      <Router>
        <Redirect to={'/location/' + eventId} />
      </Router>
    ) : (
      <div className="container">
        <Translation>{(t, {i18n}) => <h1>{t('Agenda')}</h1>}</Translation>
        {this.state.events.map((event, i) => (
          <div key={i}>
            <h2 key={'title' + i}>{event.title}</h2>
            <p key={'about' + i}>About: {event.about}</p>
            <p key={'date' + i}>Date: {event.date}</p>
            <p key={'img' + i}>Image: {event.img}</p>
            <p key={'genre' + i}>Genre: {event.genre}</p>
            <img key={'img' + i} src={event.img} alt={event.title} />
          </div>
        ))}
        <div style={{marginBottom: '10%'}}></div>
      </div>
    );
  }
}

export default Agenda;
