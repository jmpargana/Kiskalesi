const router = require('express').Router();
let Event = require('../models/Event');


/**
 * CRUD methods for Event model
 */
router.get('/', (req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
  const newEvent = new Event({
    genre: req.body.genre,
    img: req.body.img,
    title: req.body.title,
    about: req.body.about,
    date: req.body.date,
    contact: req.body.contact,
  })
    .save()
    .then(() => res.json('Adding new event'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(exercise))
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
      event.date = req.body.about;
      event.contact = req.body.contact;

      exercise.save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
