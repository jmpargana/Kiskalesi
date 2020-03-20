import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import auth0Client from './Auth';
import {Translation} from 'react-i18next';
import {ContactInput} from './ContactInputs';
import {GenreInputSelector} from './GenreInputSelector';
import {TitleAbout} from './TitleAbout';
import SimpleMap from './testmap';
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

      coordinates: {
        lat: 0.0,
        lng: 0.0
      }
    };

    // generic handleChange for all text inputs
    this.handleChange = this.handleChange.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onClickMap = this.onClickMap.bind(this);

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

  onClickMap(e) {
    this.setState({
      coordinates: {
        lng: e.lng,
        lat: e.lat
      }
    })
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

    const en = {
      title: this.state.titleEn,
      about: this.state.aboutEn,
    }

    const ru = {
      title: this.state.titleRu,
      about: this.state.aboutRu
    }

    const tr = {
      title: this.state.titleTr,
      about: this.state.aboutTr
    }

    // attach data to form as strings
    // objects will be parsed befored being saved
    // in database on server post request
    form.append('img', this.state.img);
    form.append('genre', this.state.genre.toLowerCase());
    form.append('date', this.state.date);

    console.log(this.state.genre.toLowerCase())

    form.append('contact', JSON.stringify(contact));

    form.append('en', JSON.stringify(en));
    form.append('ru', JSON.stringify(ru));
    form.append('tr', JSON.stringify(tr));

    form.append('center', JSON.stringify(this.state.coordinates))


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


    let translations = [
      {
        lang: "English",
        titleId: "title-en",
        titleName: "titleEn",
        titleValue: this.state.titleEn,
        title: "Title",
        aboutId: "about-en",
        aboutName: "aboutEn",
        aboutValue: this.state.aboutEn,
        about: "About"
      },
      {
        lang: "Русский",
        titleId: "title-ru",
        titleName: "titleRu",
        titleValue: this.state.titleRu,
        title: "Заглавие",
        aboutId: "about-ru",
        aboutName: "aboutRu",
        aboutValue: this.state.aboutRu,
        about: "Про"
      },
      {
        lang: "Türkçe",
        titleId: "title-tr",
        titleName: "titleTr",
        titleValue: this.state.titleTr,
        title: "Başlık",
        aboutId: "about-tr",
        aboutName: "aboutTr",
        aboutValue: this.state.aboutTr,
        about: "hakkında"
      },
    ]


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
            <div className="col s6" style={{marginTop: '1%'}}>
              <SimpleMap height="600px" width="620px" onClick={this.onClickMap} />
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

          <div className="row">
            <div className="col s3">
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

              <GenreInputSelector
                onChange={this.handleChange}
                value={this.state.genre}
              />
              <div className="input-field col s12">
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
              </div>
            </div>

            {translations.map((lang, i) => (
              <TitleAbout
                key={i}
                lang={lang.lang}
                titleId={lang.titleId}
                titleName={lang.titleName}
                titleValue={lang.titleValue}
                title={lang.title}
                onChange={this.handleChange}
                aboutId={lang.aboutId}
                aboutName={lang.aboutName}
                aboutValue={lang.aboutValue}
                about={lang.about}
              />
            ))}

          </div>

            <div className="row">
              <div className="input-field col s6 center-align">
                <input
                  type="submit"
                  value="Create New Event"
                  className="btn btn-primary"
                />
              </div>
            </div>
          <div style={{marginBottom: '10%'}}></div>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
