import React from 'react';
import {Translation} from 'react-i18next';

export const Events = props => {
  let subLists = [];

  for (var i = 0; i < props.events.length; i += 4)
    subLists.push(props.events.slice(i, i + 4));

  return (
    <Translation>
      {(t, {i18n}) => (
        <div className="container">
          <h2>{t('Agenda')}</h2>
          {subLists.map((chunks, i) => (
            <div key={'row' + i} className="row">
              {chunks.map((event, j) => (
                <div key={'col' + i + j} className="col s3">
                  <div className="card hoverable">
                    <div className="card-image">
                      <img src="public/ist3.jpg" alt={event.title} />
                    </div>
                    <div className="card-content">
                      <span className="card-title">{event.title}</span>
                      <p>{event.about}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </Translation>
  );
};
