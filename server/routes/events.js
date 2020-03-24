const router = require('express').Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const aws = require('aws-sdk');
require('dotenv').config();

let Event = require('../models/Event');



/**
 * Setup multer for file upload
 * upload files to public/ directory
 */
const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  Bucket: process.env.S3_BUCKET_NAME,
  region: process.env.REGION,
});

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'kizkalesi',
    metadata: (req, file, cb) => {
      if (
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg'
      ) {
        cb(null, {fieldName: file.originalname});
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    },
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});


/**
 * CRUD methods for Event model
 */
router.get('/', (req, res) => {
  Event.find(req.query)
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/post', upload.single('img'), (req, res) => {
  // url for aws s3 bucket
  const url =
    'https://' +
    process.env.S3_BUCKET_NAME +
    '.s3.' +
    process.env.REGION +
    '.amazonaws.com/';

  const newEvent = new Event({
    genre: req.body.genre,
    img: url + req.file.originalname,
    en: JSON.parse(req.body.en),
    tr: JSON.parse(req.body.tr),
    ru: JSON.parse(req.body.ru),
    date: req.body.date,
    contact: JSON.parse(req.body.contact),
    center: JSON.parse(req.body.center),
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
