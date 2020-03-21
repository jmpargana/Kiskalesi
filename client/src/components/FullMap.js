import React from 'react';
import axios from 'axios';
import SimpleMap from './testmap';

class FullMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      pins: [],
    };
  }

  organizePins() {
    console.log(this.state);
  }

  componentDidMount() {
    // perform axios call to fetch data
    axios
      .get('http://127.0.0.1:3001/events', {})
      .then(res => {
        this.setState({
          events: res.data,
        });

        this.organizePins();
      })
      .catch(err => console.log(err));
  }

  render() {
    return <SimpleMap width="100%" height="95vh" listPins={this.state.pins} />;
  }
}

export default FullMap;
