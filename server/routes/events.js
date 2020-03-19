const router = require('express').Router();
const multer = require('multer');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

let Event = require('../models/Event');


/**
 * Setup multer for file upload
 * upload files to public/ directory
 */
const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split('').join('-');
    cb(null, uuidv4() + '-' + fileName);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});




/**
 * CRUD methods for Event model
 */
router.get('/', (req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/post', upload.single('img'), (req, res) => {
  const url = req.protocol + '://' + req.get('host');

  const newEvent = new Event({
    genre: req.body.genre,
    img: url + '/public/' + req.file.filename,
    en: JSON.parse(req.body.en),
    tr: JSON.parse(req.body.tr),
    ru: JSON.parse(req.body.ru),
    date: req.body.date,
    contact: JSON.parse(req.body.contact),
  })
    .save()
    .then(() => res.json('Adding new event'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event was deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.genre = req.body.genre;
      event.img = req.body.img;
      event.title = req.body.title;
      event.about = req.body.about;
      event.date = req.body.date;
      event.contact = req.body.contact;

      event
        .save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
