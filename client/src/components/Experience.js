import React, {Component} from 'react';
import axios from 'axios';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: this.props.match.params.eventId,
      events: [],
    };
  }

  componentWillMount() {
    axios
      .get('localhost:3001/events')
      .then(res => {
        this.setState({
          events: res.data,
        });
      })
      .catch(err => console.error.bind(err));
  }

  render() {
    return this.state.eventId ? (
      <h1>{this.state.eventId}</h1>

    ) : (
      <h1>Experience</h1>
    );
  }
}

export default Experience;
