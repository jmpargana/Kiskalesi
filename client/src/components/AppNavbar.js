import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import AppNavDropdown from './AppNavDropdown';

const toExplore = ['Shopping', 'Restaurants', 'Sailing'];
const toExperience = ['Attractions', 'Museums', 'Parks&Gardens', 'Top10'];
const toInfos = ['HowToGetThere', 'Hotels', 'Map'];

class AppNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand>Kiskalesi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/agenda">Agenda</Nav.Link>
            <AppNavDropdown key="Explore" title="Explore" items={toExplore} />
            <AppNavDropdown
              key="Experience"
              title="Experience"
              items={toExperience}
            />
            <AppNavDropdown title="Infos" items={toInfos} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
