import React from 'react';
import { Translation } from 'react-i18next';
// import SimpleMap from './Maps';
import SimpleMap from './testmap';



const Home = () => { 
  return (
    <React.Fragment>
      <Translation>
      {
        (t, { i18n }) => <h1>{t("Welcome")}</h1>
      }
      </Translation>
      <SimpleMap />
    </React.Fragment>
  );
}

export default Home;
