import React from 'react';
import {Translation} from 'react-i18next';
import M from 'materialize-css';
// import SimpleMap from './Maps';
// import SimpleMap from './testmap';

class Home extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <React.Fragment>
        <div className="parallax-container">
          <div className="parallax">
            <img src="public/273897.jpg" alt="1" />
          </div>
        </div>
        <div className="section cyan darken-3">
          <div className="row container">
            <Translation>
              {(t, {i18n}) => (
                <h2 className="header grey-text text-lighten-3">
                  {t('Welcome')}
                </h2>
              )}
            </Translation>
            <p>Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</p>
            <p>Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</p>
            <p>Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</p>
            <h5>Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</h5>
            <h5>Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</h5>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="public/ist2.jpg" alt="2" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
