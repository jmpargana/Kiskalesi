import React from 'react';
import i18n from '../i18n.js';

class LanguageChoice extends React.Component {
  handleChange(lng) {
    i18n.changeLanguage(lng);
    // window.location = '/';
  }

  render() {
    return (
      <ul id="dropdown-languages" className="dropdown-content">
        {['en', 'tr', 'ru'].map(lang => (
          <li key={lang}>
            <a href="#0" onClick={() => this.handleChange(lang)}>
              {lang}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default LanguageChoice;
