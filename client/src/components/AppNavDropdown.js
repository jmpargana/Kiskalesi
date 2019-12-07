import React, {Component} from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

class AppNavDropdown extends Component {
  render() {
    return (
      <NavDropdown
        title={this.props.title}
        id="basic-nav-dropdown"
        href={'/' + this.props.title.toLowerCase()}>
        {this.props.items.map((item, i) => (
          <NavDropdown.Item
            key={i}
            href={
              '/' + this.props.title.toLowerCase() + '/' + item.toLowerCase()
            }>
            {item}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  }
}

export default AppNavDropdown;
