//import router dependency
const analyzeTone = require('./tone')
const router = require("express").Router();
//import our model(which is our mongodb collection and schema)
let Entries = require("../models/entries.model");
const moment = require('moment');

//Get data from the database i.e get entries stored in the database
router.route("/").get((req, res) => {

  const {from, to} = req.query;
  
  Entries
      .find({_userId: req.header('userId')})
      .sort({ createdAt: -1 })
      .then(entries => {

        if(from) {
          const fromDate = moment(from, "YYYYMMDD");
          entries = entries.filter(entry => moment(entry.createdAt).isAfter(fromDate));
        }

        if(to) {
          const toDate = moment(to, "YYYYMMDD");
          entries = entries.filter(entry => moment(entry.createdAt).isBefore(toDate));
        }

        return res.json(entries)
      })
      .catch(err => res.status(400).json("Error:" + err))
});

// Add/insert into the database i.e add a new entry to the database
router.route("/add").post((req, res) => {

    analyzeTone(req.body.content).then(tones => {

      const newEntries = new Entries({
          ...req.body,
          tones: tones,
      });

      return newEntries.save()
          .then(savedEntry => {
              res.status(200).json(savedEntry)
          })
          .catch(err => res.status(404).json(`Error: ${err}`));
      });
});

//find a specific entry from the database
router.route('/:id').get((req, res) => {
  Entries.findById(req.params.id)
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

//edit a specific entry from the database and update it
router.route('/update/:id').put((req, res) => {

  analyzeTone(req.body.content).then(tones => {
    return Entries.findById(req.params.id)
      .then(entries => {
        entries.content = req.body.content;
        entries.prompt = req.body.prompt;
        entries.tones = tones;
          
        //update part
        entries.save()
          .then(updatedEntry => res.json(updatedEntry))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  })
});

//Deleting a specific entry from the database
router.route('/delete/:id').delete((req, res) => {
  Entries.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;

