import React from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'; 

import Agenda from './components/Agenda';
import Home from './components/Home';
import Experience from './components/Experience';
import Explore from './components/Explore';
import Infos from './components/Infos';
import AppEvent from './components/AppEvent';
import NotFound from './components/notFound';
import CreateEvent from './components/CreateEvent';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/agenda/:eventId?" component={Agenda} />
            <Route path="/experience/:eventId?" component={Experience} />
            <Route path="/explore/:eventId?" component={Explore} />
            <Route path="/infos/:eventId?" component={Infos} />
            <Route path="/location/:eventId" component={AppEvent} />
            <Route path="/admin" component={CreateEvent} />
            <Route component={NotFound} />
          </Switch>
       </Container>
      </Router>
    </div>
  );
}

export default App;
