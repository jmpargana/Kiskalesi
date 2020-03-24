import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import i18n from '../i18n';
import './SimpleMap.css';

const AnyReactComponent = props => (
  <div id="show" className={props.color ? props.color + '-text' : ''}>
    <i className="material-icons">place</i>
    <span id="hide-hover">{props.text}</span>
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      listPins: this.props.listPins ? this.organizePins(this.props.listPins) : [],
      providedListPins: this.props.listPins ? true : false
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

  organizePins(listPins) {
    let colors = {
      amber: [],
      red: [],
      lime: [],
      teal: [],
      blue: [],
      'deep-purple': [],
      pink: [],
      indigo: [],
    };

    this.props.listPins.forEach(event => {
      switch (event.genre) {
        case 'events':
          colors['amber'].push(event);
          break;
        case 'restaurants':
          colors['red'].push(event);
          break;
        case 'sailing':
          colors['blue'].push(event);
          break;
        case 'shopping':
          colors['indigo'].push(event);
          break;
        case 'museums':
          colors['lime'].push(event);
          break;
        case 'attractions':
          colors['deep-purple'].push(event);
          break;
        case 'parksgardens':
          colors['teal'].push(event);
          break;
        case 'hotels':
          colors['pink'].push(event);
          break;
        case 'howtoget':
          colors['pink'].push(event);
          break;
        default:
          throw new Error("Event doesn't contain a valid genre");
      }
    });

    return colors;
  }

  onClick(e) {
    this.setState({
      clicked: true,
      pin: <AnyReactComponent lat={e.lat} lng={e.lng} text="onClick" />,
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

          {this.props.calledPin ? (
            <AnyReactComponent
              lat={this.props.calledPin.lat}
              lng={this.props.calledPin.lng}
              text={this.props.text}
            />
          ) : (
            ''
          )}

          {this.state.providedListPins && Object.keys(this.state.listPins).map(color => (
            this.state.listPins[color].map(pin => (
              <AnyReactComponent 
                text={pin.en.title}
                lat={pin.center.lat}
                lng={pin.center.lng}
                color={color}
              />
            ))
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
