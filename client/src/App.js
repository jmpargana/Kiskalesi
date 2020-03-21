import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch, withRouter} from 'react-router-dom';

import Agenda from './components/Agenda';
import Home from './components/Home';
// import Experience from './components/Experience';
// import Explore from './components/Explore';
// import Infos from './components/Infos';
import AppEvent from './components/AppEvent';
import NotFound from './components/notFound';
import CreateEvent from './components/CreateEvent';
import AppFooter from './components/AppFooter';
import NavBar from './components/NavBar';
import Callback from './components/Callback';
import SecuredRoute from './components/SecuredRoute';
import auth0Client from './components/Auth';
import {routes} from './jsonData/routes';
import FullMap from './components/FullMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    };
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({checkingSession: false});
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession: false});
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

          {routes.map((route, i) => (
            <Route
              key={i}
              path={'/' + route + '/:eventId?'}
              component={Agenda}
            />
          ))}

          <Route path="/map" component={FullMap} />
          <Route path="/location/:eventId" component={AppEvent} />
          <Route exact path="/callback" component={Callback} />
          <SecuredRoute
            path="/admin"
            component={CreateEvent}
            checkingSession={this.state.checkingSession}
          />
          <Route component={NotFound} />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default withRouter(App);
