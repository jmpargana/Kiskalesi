import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Events} from './Events';
import SimpleMap from './SimpleMap';
import M from 'materialize-css';

const API = 'https://kizkalesi.herokuapp.com/events';
// const API = 'http://localhost:3001/events';

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      called: false,
    };
  }

  UNSAFE_componentWillMount() {
    axios
      .get(API, {
        params: {
          genre: this.props.location.pathname.replace('/', '').toLowerCase(),
        },
        crossdomain: true,
      })
      .then(res => {
        this.setState({
          events: res.data,
          called: true,
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    M.AutoInit();
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
              <img
                src={require('../assets/images' + this.props.location.pathname + '.jpg')}
                alt="2"
              />
            </div>
          </div>
        )}
        <div className="section">
          <Events
            events={this.state.events}
            title={this.props.location.pathname.replace('/', '').toLowerCase()}
          />
        </div>
        <div className="parralax-container">
          {this.state.called ? (
            <SimpleMap
              height="500px"
              width="100%"
              listPins={this.state.events}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default Agenda;
