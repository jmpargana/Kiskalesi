import React from 'react';
import {Translation} from 'react-i18next';
import moment from 'moment';
import i18n from '../i18n';

export const Events = props => {
  let subLists = [];

  for (var i = 0; i < props.events.length; i += 4)
    subLists.push(props.events.slice(i, i + 4));

  const getCurrentLng = () => i18n.language || '';

  return (
    <Translation>
      {(t, {i18n}) => (
        <div className="row container">
          <h2>{t('Agenda')}</h2>
          {subLists.map((chunks, i) => (
            <div key={'row' + i} className="row">
              {chunks.map((event, j) => (
                <div key={'col' + i + j} className="col s3">
                  <div
                    className="card hoverable"
                    onClick={() =>
                      (window.location = '/location/' + event._id)
                    }>
                    <div className="card-image">
                      <img src={event.img} alt={event.id} />
                    </div>
                    <div className="card-content">
                      <span className="card-title">
                        {event[getCurrentLng()]
                          ? event[getCurrentLng()].title
                          : ''}
                      </span>
                      ;<p>{moment(event.date).format('MMMM Do YYYY')}</p>
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
