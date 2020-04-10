//import router dependency
const analyzeTone = require('./tone')
const router = require("express").Router();
//import our model(which is our mongodb collection and schema)
let Entries = require("../models/entries.model");

//Get data from the database i.e get entries stored in the database
router.route("/").get((req, res) => {
    Entries.find()
      .sort({ date: -1 })
      .then(entries => res.json(entries))
      .catch(err => res.status(400).json("Error:" + err))
});

// Add/insert into the database i.e add a new entry to the database
router.route("/add").post((req, res) => {
    console.log(req.body);
    const content = req.body.content;
    const mood = req.body.mood
    const prompt = req.body.prompt
    // const date = Date.parse(req.body.date);

    const newEntries = new Entries({
        content,
        mood,
        prompt
    });
    // saving the new entries into the database
    newEntries.save()
        .then(savedEntry => {
            res.status(200).json(savedEntry)
        })
        .catch(err => res.status(404).json(`Error: ${err}`));
});

//find a specific entry from the database
router.route('/:id').get((req, res) => {
  Entries.findById(req.params.id)
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

//edit a specific entry from the database and update it
router.route('/update/:id').put((req, res) => {

  analyzeTone(req.body.content).then(tone => {
    console.log(tone);
    return Entries.findById(req.params.id)
    .then(entries => {
      entries.content = req.body.content;
      entries.mood = req.body.mood;
      entries.prompt = req.body.prompt;
      entries.tone = tone;
      // entries.date = Date.parse(req.body.date);
        
        //update part

      entries.save()
        .then(updatedEntry => res.json(updatedEntry))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
  })

});

//Deleting a specific entry from the database
router.route('/:id').delete((req, res) => {
  Entries.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
});

    
module.exports = router;

