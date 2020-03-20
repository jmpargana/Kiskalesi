import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import i18n from '../i18n';
import './SimpleMap.css';

const AnyReactComponent = props => (
  <div id="show" className={props.color ? props.color + '-text' : 'red-text'}>
    <i className="material-icons">place</i>
    <span id="hide-hover">{props.text}</span>
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  static defaultProps = {
    center: {
      lat: 36.460491,
      lng: 34.143372,
    },
    width: '600px',
    height: '600px',
    zoom: 16,
  };

  onClick(e) {
    this.setState({
      clicked: true,
      pin: <AnyReactComponent lat={e.lat} lng={e.lng} text="New" />,
    });
  }

  render() {
    return (
      <div
        style={{
          height: this.props.height || this.defaultProps.height,
          width: this.props.width || this.defaultProps.width,
        }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_API_KEY,
            language: i18n.language,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          onClick={this.props.onClick || this.onClick}>
          {this.state.clicked ? this.state.pin : ''}

          {this.props.center ? (
            <AnyReactComponent
              lat={this.props.center.lat}
              lng={this.props.center.lng}
              text={this.props.text}
            />
          ) : (
            ''
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
