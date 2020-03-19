import React from 'react';
import {Link} from 'react-router-dom';
import {Translation} from 'react-i18next';

export const DropdownNavbarElements = props => (
  <Translation>
    {(t, {i18n}) => (
      <ul
        id={props.cathegory ? 'dropdown-' + props.cathegory.toLowerCase() : ''}
        className="dropdown-content">
        {props.list.map((elem, i) => (
          <li key={i}>
            <Link to={'/' + elem.toLowerCase()}>{t(elem)}</Link>
          </li>
        ))}
      </ul>
    )}
  </Translation>
);
