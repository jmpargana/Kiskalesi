import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import auth0Client from './Auth';
import {Translation} from 'react-i18next';
import M from 'materialize-css';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: null,
      genre: '',
      titleEn: '',
      aboutEn: '',
      titleRu: '',
      aboutRu: '',
      titleTr: '',
      aboutTr: '',
      date: new Date(),
      contact: {
        address: {
          address: '',
          city: '',
          postalCode: '',
        },
        email: '',
        website: '',
        phone: '',
      },
    };

    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAbout = this.onChangeAbout.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeContactAddressAddress = this.onChangeContactAddressAddress.bind(
      this,
    );
    this.onChangeContactAddressCity = this.onChangeContactAddressCity.bind(
      this,
    );
    this.onChangeContactAddressPostalCode = this.onChangeContactAddressPostalCode.bind(
      this,
    );
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactWebsite = this.onChangeContactWebsite.bind(this);
    this.onChangeContactPhone = this.onChangeContactPhone.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onChangeImg(e) {
    this.setState({
      img: e.target.files[0],
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeAbout(e) {
    this.setState({
      about: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeContactAddressAddress(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        address: {
          ...prevState.contact.address,
          address: e.target.value,
        },
      },
    }));
  }

  onChangeContactAddressCity(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        address: {
          ...prevState.contact.address,
          city: e.target.value,
        },
      },
    }));
  }

  onChangeContactAddressPostalCode(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        address: {
          ...prevState.contact.address,
          postalCode: e.target.value,
        },
      },
    }));
  }

  onChangeContactEmail(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        email: e.target.value,
      },
    }));
  }

  onChangeContactWebsite(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        website: e.target.value,
      },
    }));
  }

  onChangeContactPhone(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        phone: e.target.value,
      },
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    let form = new FormData();

    form.append('img', this.state.img);
    form.append('genre', this.state.genre);
    form.append('title', this.state.title);
    form.append('about', this.state.about);
    form.append('date', this.state.date);
    form.append('contact', this.state.contact);

    axios
      .post('http://127.0.0.1:3001/events/post', form, {
        headers: {Authorization: `Bearer ${auth0Client.getIdToken()}`},
      })
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className="container">
        <h3>
          <Translation>
            {(t, {i18n}) => <div>{t('CreateEvent')}</div>}
          </Translation>
        </h3>
          <div style={{marginTop: '5%'}}></div>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col s6" style={{marginTop: '5%', marginRight: '5%'}}>
              <div className="row">
                <div className="input-field col s12 m6">
                  <select
                    onChange={this.onChangeGenre}
                    value={this.state.genre}
                    required>
                    <option value="" disabled>
                      Choose your option
                    </option>
                    <optgroup label="Explore">
                      <option value="Restaurants">Restaurants</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Sailing">Sailling</option>
                    </optgroup>
                    <optgroup label="Experience">
                      <option value="Museums">Museums</option>
                      <option value="Attractions">Attract</option>
                      <option value="ParksGardens">Parks and Gardens</option>
                    </optgroup>
                    <optgroup label="Infos">
                      <option value="Hotels">Hotels</option>
                      <option value="HowToGet">How to get there</option>
                      <option value="Map">Map</option>
                    </optgroup>
                  </select>
                  <label>Genre</label>
                </div>
              </div>
              <div className="row">
                <div className="file-field input-field col s12">
                  <div className="btn">
                    <span>Image</span>
                    <input type="file" onChange={this.onChangeImg} />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    id="title"
                    required
                    className="validate"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                  />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    id="about"
                    required
                    className="validate"
                    value={this.state.about}
                    onChange={this.onChangeAbout}
                  />
                  <label htmlFor="about">About </label>
                </div>
              </div>
              <div className="row">

                <div className="input-field col s6">
                  <input
                    type="submit"
                    value="Create New Event"
                    className="btn btn-primary"
                  />
                </div>
                <div className="input-field col s6">
                  <div className="col s12">
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
</div>
            </div>

            <div className="row">
              <div className="col s6 m6">
                <div className="card blue-grey darken-2">
                  <div className="card-content white-text">
                    <span className="card-title">Contact Data</span>

                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">house</i>
                        <input
                          type="text"
                          id="contact-adress-adress"
                          required
                          className="validate"
                          value={this.state.contact.address.address}
                          onChange={this.onChangeContactAddressAddress}
                        />
                        <label htmlFor="contact-adress-adress">Adress</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <i className="material-icons prefix">place</i>
                        <input
                          type="text"
                          id="contact-adress-city"
                          required
                          className="validate"
                          value={this.state.contact.address.city}
                          onChange={this.onChangeContactAddressCity}
                        />
                        <label htmlFor="contact-adress-city">City</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          type="text"
                          id="contact-adress-postal-code"
                          required
                          className="validate"
                          value={this.state.contact.address.postalCode}
                          onChange={this.onChangeContactAddressPostalCode}
                        />
                        <label htmlFor="contact-adress-postal-code">
                          Postal Code
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          className="validate"
                          value={this.state.contact.email}
                          onChange={this.onChangeContactEmail}
                        />
                        <label htmlFor="contact-email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">laptop</i>
                        <input
                          type="text"
                          required
                          id="contact-website"
                          className="validate"
                          value={this.state.contact.website}
                          onChange={this.onChangeContactWebsite}
                        />
                        <label htmlFor="contact-website">Website</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input
                          type="text"
                          id="contact-phone"
                          className="form-control"
                          onChange={this.onChangeContactPhone}
                        />
                        <label htmlFor="contact-phone">Phone</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{marginBottom: '10%'}}></div>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
