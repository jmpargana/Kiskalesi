import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import {Translation} from 'react-i18next';
import M from 'materialize-css';
import i18n from '../i18n';

class NavBar extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  handleChange(lng) {
    i18n.changeLanguage(lng);
  }

  signOut() {
    auth0Client.signOut();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <ul id="dropdown-languages" className="dropdown-content">
          <li>
            <a href="/#" onClick={() => this.handleChange('en')}>
              en
            </a>
          </li>
          <li>
            <a href="/#" onClick={() => this.handleChange('tr')}>
              tr
            </a>
          </li>
          <li>
            <a href="/#" onClick={() => this.handleChange('ru')}>
              ru
            </a>
          </li>
        </ul>
        <ul id="dropdown-explore" className="dropdown-content">
          <li>
            <Link to="/shopping">
              <Translation>
                {(t, {i18n}) => <div>{t('Shopping')}</div>}
              </Translation>
            </Link>
          </li>
          <li>
            <Link to="/restaurants">
              <Translation>
                {(t, {i18n}) => <div>{t('Restaurants')}</div>}
              </Translation>
            </Link>
          </li>
          <li>
            <Link to="/sailing">
              <Translation>
                {(t, {i18n}) => <div>{t('Sailing')}</div>}
              </Translation>
            </Link>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">
              <Translation>
                {(t, {i18n}) => <div>{t('Title')}</div>}
              </Translation>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/agenda">
                  <Translation>
                    {(t, {i18n}) => <div>{t('Agenda')}</div>}
                  </Translation>
                </Link>
              </li>
              <li>
                <a
                  className="dropdown-trigger"
                  data-target="dropdown-languages"
                  href="/#">
                  <Translation>
                    {(t, {i18n}) => (
                      <div>
                        {t('Language')}
                        <i className="material-icons right">arrow_drop_down</i>
                      </div>
                    )}
                  </Translation>
                </a>
              </li>
              {!auth0Client.isAuthenticated() && (
                <li>
                  <button className="btn" onClick={auth0Client.signIn}>
                    Sign In
                  </button>
                </li>
              )}
              {auth0Client.isAuthenticated() && (
                <li>
                  <div>
                    <label className="badge white-text">
                      {auth0Client.getProfile().name}
                    </label>
                    <button
                      className="btn"
                      onClick={() => {
                        this.signOut();
                      }}>
                      Sign Out
                    </button>
                  </div>
                </li>
              )}

              <li>
                <Link to="/admin">
                  <i className="material-icons right">settings</i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);
