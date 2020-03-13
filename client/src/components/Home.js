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
        <div className="section white">
          <div className="row container">
            <Translation>
              {(t, {i18n}) => <h2 className="header">{t('Welcome')}</h2>}
            </Translation>
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
