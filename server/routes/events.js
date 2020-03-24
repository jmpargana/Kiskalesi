const router = require('express').Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const aws = require('aws-sdk')

let Event = require('../models/Event');


/**
 * Setup multer for file upload
 * upload files to public/ directory
 */
aws.config({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'eu-west-3'
});

// const DIR = './public/';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname
//       .toLowerCase()
//       .split('')
//       .join('-');
//     cb(null, uuidv4() + '-' + fileName);
//   },
// });

// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == 'image/png' ||
//       file.mimetype == 'image/jpg' ||
//       file.mimetype == 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   },
// });


let s3 = new aws.S3({});


let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: (req, file, cb) => {
      if (
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg'
      ) {
        cb(null, {fieldName: file.fieldname});
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});



/**
 * CRUD methods for Event model
 */
router.get('/', (req, res) => {
  // console.log(req.query.genre.replace("/", ""))

  Event.find(req.query)
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
