import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Agenda from './components/Agenda';
// import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Explore from './components/Explore';
import Infos from './components/Infos';
import AppEvent from './components/AppEvent';
import NotFound from './components/notFound';
import CreateEvent from './components/CreateEvent';
import AppFooter from './components/AppFooter';
// import SimpleMap from './components/Maps';
import NavBar from './components/NavBar';
import Callback from './components/Callback';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <div style={{height: 100 + "px"}}></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/agenda/:eventId?" component={Agenda} />
            <Route path="/experience/:eventId?" component={Experience} />
            <Route path="/explore/:eventId?" component={Explore} />
            <Route path="/infos/:eventId?" component={Infos} />
            <Route path="/location/:eventId" component={AppEvent} />
            <Route exact path='/callback' component={Callback} /> 
            <Route path="/admin" component={CreateEvent} />
            <Route component={NotFound} />
          </Switch>
       </Container>
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
