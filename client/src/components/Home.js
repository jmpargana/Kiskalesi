import React from 'react';
import {Translation} from 'react-i18next';
import M from 'materialize-css';
import {navbarElements} from '../assets/jsonData/navbarElements';
import SimpleMap from './SimpleMap';

class Home extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <Translation>
        {(t, {i18n}) => (
          <>
            <div className="parallax-container">
              <div className="parallax">
                <img src={require('../assets/images/city1.jpg')} alt="1" />
              </div>
            </div>
            <div className="section teal lighten-4">
              <div style={{marginTop: '5%'}}></div>
              <div className="row container">
                <h3 className="header">{t('welcome')}</h3>
                <p className="center-align">
                  Lorem saepe voluptatum id minima quasi? Maiores modi quisquam
                  quibusdam mollitia possimus Neque itaque maiores reiciendis
                  nihil temporibus. Deserunt magnam voluptate delectus quis
                  adipisci Ipsa optio nemo debitis harum facilis Fugit
                  reprehenderit libero eum tempora veniam ad Quibusdam aliquid
                  praesentium?
                </p>
                <blockquote>
                  Lorem saepe voluptatum id minima quasi? Maiores modi quisquam
                  quibusdam mollitia possimus Neque itaque maiores reiciendis
                  nihil temporibus. Deserunt magnam voluptate delectus quis
                  adipisci Ipsa optio nemo debitis harum facilis Fugit
                  reprehenderit libero eum tempora veniam ad Quibusdam aliquid
                  praesentium?
                </blockquote>
                <p className="center-align">
                  Lorem saepe voluptatum id minima quasi? Maiores modi quisquam
                  quibusdam mollitia possimus Neque itaque maiores reiciendis
                  nihil temporibus. Deserunt magnam voluptate delectus quis
                  adipisci Ipsa optio nemo debitis harum facilis Fugit
                  reprehenderit libero eum tempora veniam ad Quibusdam aliquid
                  praesentium?
                </p>
              </div>
              <div style={{marginTop: '5%'}}></div>
            </div>

            {navbarElements.map((obj, i) => (
              <>
                <div className="parallax-container">
                  <div className="parallax">
                    <img
                      src={require('../assets/images/' + obj.image + '.jpg')}
                      alt="2"
                    />
                  </div>
                </div>
                <div className={'section ' + obj.backgroundColor}>
                  {obj.list.map((elem, i) =>
                    elem === 'map' ? (
                      ''
                    ) : i % 2 === 0 ? (
                      <>
                        <div style={{marginTop: '5%'}}></div>
                        <div className="row container">
                          <div className="col s12 m6 center-align">
                            <div style={{marginTop: '8%'}}></div>
                            <h3>{t(elem)}</h3>
                            <p>
                              Ipsum veritatis recusandae minima deleniti
                              dignissimos Sunt consectetur quam voluptatem minus
                              mollitia. Velit consequatur voluptas quae possimus
                              labore voluptate eos Itaque velit aliquam libero
                              accusantium voluptas non Quia fugiat sapiente
                            </p>
                            <blockquote>
                              Ipsum veritatis recusandae minima deleniti
                              dignissimos Sunt consectetur quam voluptatem minus
                              mollitia. Velit consequatur voluptas quae possimus
                              labore voluptate eos Itaque velit aliquam libero
                              accusantium voluptas non Quia fugiat sapiente
                            </blockquote>
                            <p>
                              Ipsum veritatis recusandae minima deleniti
                              dignissimos Sunt consectetur quam voluptatem minus
                              mollitia. Velit consequatur voluptas quae possimus
                              labore voluptate eos Itaque velit aliquam libero
                              accusantium voluptas non Quia fugiat sapiente
                            </p>
                          </div>
                          <div className="col s12 m6">
                            <div className="card hoverable">
                              <div
                                className="card-image"
                                onClick={() => (window.location = '/' + elem)}>
                                <img
                                  src={require('../assets/images/' +
                                    elem +
                                    '.jpg')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{marginTop: '5%'}}></div>
                        <div className="row container">
                          <div className="col s12 m6">
                            <div className="card hoverable">
                              <div
                                className="card-image"
                                onClick={() => (window.location = '/' + elem)}>
                                <img
                                  src={require('../assets/images/' +
                                    elem +
                                    '.jpg')}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col s12 m6 center-align">
                            <div style={{marginTop: '8%'}}></div>
                            <h3>{t(elem)}</h3>
                            <p>
                              Ipsum veritatis recusandae minima deleniti
                              dignissimos Sunt consectetur quam voluptatem minus
                              mollitia. Velit consequatur voluptas quae possimus
                              labore voluptate eos Itaque velit aliquam libero
                              accusantium voluptas non Quia fugiat sapiente
                            </p>
                            <blockquote>
                              Ipsum veritatis recusandae minima deleniti
                              dignissimos Sunt consectetur quam voluptatem minus
                              mollitia. Velit consequatur voluptas quae possimus
                              labore voluptate eos Itaque velit aliquam libero
                              accusantium voluptas non Quia fugiat sapiente
                            </blockquote>
                            <p>
                              Ipsum veritatis recusandae minima deleniti
                              dignissimos Sunt consectetur quam voluptatem minus
                              mollitia. Velit consequatur voluptas quae possimus
                              labore voluptate eos Itaque velit aliquam libero
                              accusantium voluptas non Quia fugiat sapiente
                            </p>
                          </div>
                        </div>
                      </>
                    ),
                  )}
                  <div style={{marginTop: '5%'}}></div>
                </div>
              </>
            ))}

            <div className="parallax-container">
              <SimpleMap height="500px" width="100%" />
            </div>
          </>
        )}
      </Translation>
    );
  }
}

export default Home;
