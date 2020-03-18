import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import {Translation} from 'react-i18next';
import M from 'materialize-css';
import LanguageChoice from './LanguageChoice';

class NavBar extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  signOut() {
    auth0Client.signOut();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="navbar-fixed">
        <LanguageChoice />
        <nav className="white">
          <Translation>
            {(t, {i18n}) => (
              <div className="nav-wrapper">
                <Link className="brand-logo teal-text" to="/">
                  {t('Title')}
                </Link>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link className="teal-text" to="/agenda">{t('Agenda')}</Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-trigger teal-text"
                      data-target="dropdown-languages"
                      href="/#">
                      {t('Language')}
                      <i className="material-icons right">arrow_drop_down</i>
                    </a>
                  </li>
                  <li>
                    <Link to="/admin" className="teal-text">
                      <i className="material-icons right">settings</i>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </Translation>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);
