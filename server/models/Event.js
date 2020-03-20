const mongoose = require('mongoose');

/**
 * Create an Event Schema
 */
const EventSchema = mongoose.Schema({
  genre: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },

  tr: {
    title: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
  },

  ru: {
    title: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
  },

  en: {
    title: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
  },

  date: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  location: {
    lat: {
      type: Number,
      required: false,
    },
    lng: {
      type: Number,
      required: false,
    },
  },
  contact: {
    address: {
      address: String,
      city: String,
      postalCode: String,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  center: {
    lat: Number,
    lng: Number
  }
});

/**
 * Save the Schema as a model
 */
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
