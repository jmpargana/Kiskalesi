import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import auth0Client from './Auth';
import {Translation} from 'react-i18next';
import {ContactInput} from './ContactInputs';
import {GenreInputSelector} from './GenreInputSelector';
import M from 'materialize-css';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    // most strings will be organized in objects in onSubmit call
    // they are just listed in order to use the generic handleChange
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

      contactAddressAddress: '',
      contactAddressCity: '',
      contactAddressPostalCode: '',
      contactEmail: '',
      contactWebsite: '',
      contactPhone: '',

      contactTest: '',
    };

    // generic handleChange for all text inputs
    this.handleChange = this.handleChange.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    // onSubmit will organize the state in objects before sending
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onChangeImg(e) {
    this.setState({
      img: e.target.files[0],
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    let form = new FormData();

    // organize data in objects
    const contact = {
      address: {
        address: this.state.contactAddressAddress,
        city: this.state.contactAddressCity,
        postalCode: this.state.contactAddressPortalCode,
      },
      email: this.state.contactEmail,
      website: this.state.contactWebsite,
      phone: this.state.contactPhone,
    };

    // attach data to form as strings
    // objects will be parsed befored being saved
    // in database on server post request
    form.append('img', this.state.img);
    form.append('genre', this.state.genre);
    form.append('title', this.state.title);
    form.append('about', this.state.about);
    form.append('date', this.state.date);

    form.append('contact', JSON.stringify(contact));

    axios
      .post('http://127.0.0.1:3001/events/post', form, {
        headers: {Authorization: `Bearer ${auth0Client.getIdToken()}`},
      })
      .then(res => console.log(res.data));

    // window.location = '/';
  }

  render() {
    // all these elements will be rendered similarly in the ContactInput componentbb
    let contact = [
      {
        name: 'contactAddressAddress',
        id: 'contact-address-address',
        state: this.state.contactAddressAddress,
        icon: 'house',
        label: 'Address',
      },
      {
        name: 'contactEmail',
        id: 'contact-email',
        state: this.state.contactEmail,
        icon: 'email',
        label: 'Email',
      },
      {
        name: 'contactWebsite',
        id: 'contact-website',
        state: this.state.contactWebsite,
        icon: 'laptop',
        label: 'Website',
      },
      {
        name: 'contactPhone',
        id: 'contact-phone',
        state: this.state.contactPhone,
        icon: 'phone',
        label: 'Phone',
      },
    ];

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
            <div
              className="col s6"
              style={{marginTop: '5%', marginRight: '5%'}}>
              <GenreInputSelector 
                onChange={this.handleChange}
                value={this.state.genre}
              />
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
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
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
                    name="about"
                    className="validate"
                    value={this.state.about}
                    onChange={this.handleChange}
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
                      <div className="input-field col s6">
                        <i className="material-icons prefix">place</i>
                        <input
                          type="text"
                          id="contact-adress-city"
                          required
                          className="validate"
                          name="contactAddressCity"
                          value={this.state.contactAddressCity}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="contact-adress-city">City</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          type="text"
                          id="contact-adress-postal-code"
                          required
                          className="validate"
                          name="contactAddressPostalCode"
                          value={this.state.contactAddressPostalCode}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="contact-adress-postal-code">
                          Postal Code
                        </label>
                      </div>
                    </div>

                    {contact.map((obj, i) => (
                      <ContactInput
                        key={i}
                        onChange={this.handleChange}
                        state={obj.state}
                        icon={obj.icon}
                        id={obj.id}
                        name={obj.name}
                        label={obj.label}
                      />
                    ))}
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
