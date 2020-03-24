import React from 'react';
import axios from 'axios';
import SimpleMap from './SimpleMap';

const API = 'https://kizkalesi.herokuapp.com/events';
// const API = 'http://localhost:3001/events';

class FullMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      called: false
    };
  }

  UNSAFE_componentWillMount() {
    // perform axios call to fetch data
    axios
      .get(API, {})
      .then(
        function(res) {
          this.setState({
            events: res.data,
            called: true
          });
        }.bind(this),
      )
      .catch(err => console.log(err));
  }

  render() {
    return this.state.called ? (
      <SimpleMap width="100%" height="95vh" listPins={this.state.events} />
    ) : null;
  }
}

export default FullMap;
