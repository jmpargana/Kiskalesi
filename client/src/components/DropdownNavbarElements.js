import React from 'react';
import {Link} from 'react-router';
import {Translation} from 'react-i18next';

export const DropdownNavbarElements = props => (
  <Translation>
    {(t, {i18n}) => (
      <ul
        id={'dropdown-' + props.cathegory.toLowerCase()}
        className="dropdown-content">
        {props.list.map(elem => (
          <li>
            <Link to={'/' + elem.toLowerCase()}>{t(elem)}</Link>
          </li>
        ))}
      </ul>
    )}
  </Translation>
);
