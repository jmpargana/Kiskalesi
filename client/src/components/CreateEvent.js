import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';



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
          address: e.target.value
        }
      }
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
          city: e.target.value
        }
      }
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
          postalCode: e.target.value
        }
      }
    }));
}

  onChangeContactEmail(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
        contact: {
          ...prevState.contact,
          email: e.target.value
        }
    }));
  }

  onChangeContactWebsite(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        website: e.target.value
      }
    }));
  }

  onChangeContactPhone(e) {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        phone: e.target.value
      }
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    // let form = new FormData();

    // form.append('img', this.state.img);

    // const event = {
    //   genre: this.state.genre,
    //   img: this.state.img,
    //   title: this.state.title,
    //   about: this.state.about,
    //   date: this.state.date,
    //   contact: this.state.contact,
    // };

    axios.post('http://127.0.0.1:3001/events/post', this.state)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Genre: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>
          <div className="form-group">
            <label>Image: </label>
            <input
              type="file"
              required
              className="form-control"
              onChange={this.onChangeImg}
            />
          </div>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>About: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.about}
              onChange={this.onChangeAbout}
            />
          </div>
          <div className="form-group">
            <label>Contact Address Adress: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.contact.address.address}
              onChange={this.onChangeContactAddressAddress}
            />
          </div>
          <div className="form-group">
            <label>Contact Address City: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.contact.address.city}
              onChange={this.onChangeContactAddressCity}
            />
          </div>
          <div className="form-group">
            <label>Contact Address Postal Code: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.contact.address.postalCode}
              onChange={this.onChangeContactAddressPostalCode}
            />
          </div>
          <div className="form-group">
            <label>Contact Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.contact.email}
              onChange={this.onChangeContactEmail}
            />
          </div>
          <div className="form-group">
            <label>Contact Website: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.contact.website}
              onChange={this.onChangeContactWebsite}
            />
          </div>
          <div className="form-group">
            <label>Contact Phone: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeContactPhone}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create New Event"
              className="btn btn-primary"
            />
          </div>
          <div style={{marginBottom: '100px'}} >
          </div>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
