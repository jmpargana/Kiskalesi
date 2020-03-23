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
            <img src="public/city1.jpg" alt="1" />
          </div>
        </div>
        <div className="section ">
          <div className="row container">
            <Translation>
              {(t, {i18n}) => (
                <h3 className="header">
                  {t('welcome')}
                </h3>
              )}
            </Translation>
            <p className="center-align">Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</p>
            <blockquote>Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</blockquote>
            <p className="center-align">Lorem saepe voluptatum id minima quasi? Maiores modi quisquam quibusdam mollitia possimus Neque itaque maiores reiciendis nihil temporibus. Deserunt magnam voluptate delectus quis adipisci Ipsa optio nemo debitis harum facilis Fugit reprehenderit libero eum tempora veniam ad Quibusdam aliquid praesentium?</p>
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
