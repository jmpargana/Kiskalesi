import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import {Translation} from 'react-i18next';

const NavBar = props => {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
          <Link className="navbar-brand" to="/">
            <Translation>{(t, {i18n}) => <div>{t('Title')}</div>}</Translation>
          </Link>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/agenda">
            <Translation>{(t, {i18n}) => <div>{t('Agenda')}</div>}</Translation>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            <Translation>{(t, {i18n}) => <div>{t('Admin')}</div>}</Translation>
          </Link>
        </li>
      </ul>
      {!auth0Client.isAuthenticated() && (
        <button className="btn btn-dark" onClick={auth0Client.signIn}>
          Sign In
        </button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <label className="mr-2 text-white">
            {auth0Client.getProfile().name}
          </label>
          <button
            className="btn btn-dark"
            onClick={() => {
              signOut();
            }}>
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default withRouter(NavBar);
