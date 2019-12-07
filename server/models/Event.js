const mongoose = require('mongoose');

/**
 * Create an Event Schema
 */
const EventSchema = mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  contact: {
    address: {
      address: String,
      city: String,
      postalCode: String
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
});

/**
 * Save the Schema as a model
 */
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
