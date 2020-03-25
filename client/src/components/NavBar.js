import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import {Translation} from 'react-i18next';
import M from 'materialize-css';
import LanguageChoice from './LanguageChoice';
import {navbarElements} from '../assets/jsonData/navbarElements';
import {DropdownNavbarElements} from './DropdownNavbarElements';

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

        {navbarElements.map((elem, i) => (
          <DropdownNavbarElements
            key={i}
            cathegory={elem.cathegory}
            list={elem.list}
          />
        ))}

        <nav className="white">
          <Translation>
            {(t, {i18n}) => (
              <div className="nav-wrapper">
                <Link className="brand-logo teal-text" to="/">
                  {t('title')}
                </Link>
                <ul
                  className="right hide-on-med-and-down"
                  id="nav-mobile"
                >
                  <li>
                    <Link className="teal-text" to="/events">
                      {t('events')}
                    </Link>
                  </li>

                  {navbarElements.map((elem, i) => (
                    <li key={i}>
                      <a
                        href="#0"
                        className="dropdown-trigger teal-text"
                        data-target={
                          'dropdown-' + elem.cathegory.toLowerCase()
                        }>
                        {t(elem.cathegory)}
                        <i className="material-icons right">arrow_drop_down</i>
                      </a>
                    </li>
                  ))}

                  <li>
                    <a
                      className="dropdown-trigger teal-text"
                      data-target="dropdown-languages"
                      href="/#">
                      {t('language')}
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
