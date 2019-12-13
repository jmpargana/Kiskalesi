import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }
  state = {

  };

  onMapClicked(mapProps, map, clickEvent) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }

    this.myRef.current.marker.position = {
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng()
    };

  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    const mapStyles = {
      width: '60%',
      height: '80%',
    };

    return (
      <div className="container"
      >
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{lat: 36.460491, lng: 34.143372}}
          onClick={this.onMapClicked.bind(this)}
        >
          <Marker
            id={'thisEvent'}
            name={this.props.eventName}
            position={{lat: this.props.lat, lng: this.props.lng}} />
            onClick={this.onMarkerClick.bind(this)}
          <Marker
            id={'selectedEvent'}
            name={'Your selection'}
            ref={this.myRef}
            onClick={this.onMarkerClick.bind(this)}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(SimpleMap);
