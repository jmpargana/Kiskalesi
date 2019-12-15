import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import {
  Route,
  Switch,
  withRouter,
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
import SecuredRoute from './components/SecuredRoute';
import auth0Client from './components/Auth';


// translation hoc
import { withNamespaces } from 'react-i18next';



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
    const { t } = this.props;
    return (
      <div className="App">
        <NavBar />
        <Container>
          <div style={{height: 100 + 'px'}}></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/agenda/:eventId?" component={Agenda} />
            <Route path="/experience/:eventId?" component={Experience} />
            <Route path="/explore/:eventId?" component={Explore} />
            <Route path="/infos/:eventId?" component={Infos} />
            <Route path="/location/:eventId" component={AppEvent} />
            <Route exact path="/callback" component={Callback} />
            <SecuredRoute path="/admin" 
                          component={CreateEvent} 
                          checkingSession={this.state.checkingSession}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      <AppFooter />
      </div>
    );
  }
}

export default withRouter(App);
