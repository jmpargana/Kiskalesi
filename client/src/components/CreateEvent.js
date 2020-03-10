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
      genre: '',
      img: null,
      title: '',
      about: '',
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

    const event = {
      genre: this.state.genre,
      // img: this.state.img,
      title: this.state.title,
      about: this.state.about,
      date: this.state.date,
      contact: this.state.contact,
    };

    axios
      .post('http://127.0.0.1:3001/events/post', event, {
        headers: {Authorization: `Bearer ${auth0Client.getIdToken()}`},
      })
      .then(res => console.log(res.data));

    // window.location = '/admin';
  }

  render() {
    return (
      <div>
        <h3>
          <Translation>
            {(t, {i18n}) => <div>{t('CreateEvent')}</div>}
          </Translation>
        </h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-field col s12">
            <select
              onChange={this.onChangeGenre}
              value={this.state.genre}
              required>
              <option value="" disabled selected>
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
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" onChage={this.onChangeImg} />
            </div>
            <div className="file-path-wrapper">
              <input type="file-path validate" type="text" />
            </div>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="title"
              required
              className="validate"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
            <label for="title">Title</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="about"
              required
              className="validate"
              value={this.state.about}
              onChange={this.onChangeAbout}
            />
            <label for="about">About </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="contact-adress-adress"
              required
              className="validate"
              value={this.state.contact.address.address}
              onChange={this.onChangeContactAddressAddress}
            />
            <label for="contact-adress-adress">Contact Address Adress</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="contact-adress-city"
              required
              className="validate"
              value={this.state.contact.address.city}
              onChange={this.onChangeContactAddressCity}
            />
            <label for="contact-adress-city">Contact Address City</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="contact-adress-postal-code"
              required
              className="validate"
              value={this.state.contact.address.postalCode}
              onChange={this.onChangeContactAddressPostalCode}
            />
            <label for="contact-adress-postal-code">Contact Address Postal Code</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="contact-email"
              required
              className="validate"
              value={this.state.contact.email}
              onChange={this.onChangeContactEmail}
            />
            <label for="contact-email">Contact Email: </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              required
              id="contact-website"
              className="validate"
              value={this.state.contact.website}
              onChange={this.onChangeContactWebsite}
            />
            <label for="contact-website">Contact Website: </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="contact-phone"
              className="form-control"
              onChange={this.onChangeContactPhone}
            />
            <label for="contact-phone">Contact Phone: </label>
          </div>
          <div className="input-field">
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="input-field">
            <input
              type="submit"
              value="Create New Event"
              className="btn btn-primary"
            />
          </div>
          <div style={{marginBottom: '100px'}}></div>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
