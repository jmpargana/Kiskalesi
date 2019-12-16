import React from 'react';
import { Translation } from 'react-i18next';

const Home = () => { 
  return (
    <Translation>
    {
      (t, { i18n }) => <h1>{t("Welcome")}</h1>
    }
    </Translation>
  );
}

export default Home;
