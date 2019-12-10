import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

class SimpleMap extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };

    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{ lat: 36.460491, lng: 34.143372 }}
      >
        <Marker position={{ lat: this.props.lat lng: this.props.lng }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(SimpleMap);
