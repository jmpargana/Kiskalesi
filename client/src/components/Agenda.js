import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Events} from './Events';
import SimpleMap from './testmap';
import M from 'materialize-css';

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    axios
      .get('http://127.0.0.1:3001/events', {
        params: {
          genre: this.props.location.pathname.replace('/', '').toLowerCase(),
        },
      })
      .then(res => {
        this.setState({
          events: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    M.AutoInit()
  }

  render() {
    const eventId = this.props.match.params.eventId;

    return eventId ? (
      <Router>
        <Redirect to={'/location/' + eventId} />
      </Router>
    ) : (
      <>
        {this.props.location.pathname !== '/events' && (
          <div className="parallax-container">
            <div className="parallax">
              <img src="public/ist2.jpg" alt="2" />
            </div>
          </div>
        )}
        <div className="section">
          <Events events={this.state.events} />
        </div>
        <div className="parralax-container">
            <SimpleMap height="500px" width="100%" />
        </div>
      </>
    );
  }
}

export default Agenda;
