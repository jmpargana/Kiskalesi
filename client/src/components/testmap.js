import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    width: '600px',
    height: '600px',
    zoom: 11,
  };

  render() {
    return (
      <div
        style={{
          height: this.props.height || this.defaultProps.height,
          width: this.props.width || this.defaultProps.width,
        }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
