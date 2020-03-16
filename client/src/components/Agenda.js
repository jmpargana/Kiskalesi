import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Events} from './Events';

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
      <Events events={this.state.events} />
    );
  }
}

export default Agenda;
