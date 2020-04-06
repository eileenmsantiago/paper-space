//import router dependency
const router = require("express").Router();
//import our model(which is our mongodb collection and schema)
let Entries = require("../../models/Entries");

//Get data from the database i.e get entries stored in the database
router.route("/").get((req, res) => {
    Entries.find()
      .sort({ date: -1 })
      .then(entries => res.json(entries))
      .catch(err => res.status(400).json("Error:" + err))
});

// Add/insert into the database i.e add a new entry to the database
router.route("/add").post((req, res) => {
    const entryContent = req.body.entryContent;
    const mood = req.body.mood
    const prompt = req.body.prompt

    const newEntries = new Entries({
        entryContent,
        mood,
        promp
    });
    // saving the new entries into the database
    newEntries.save()
        .then(() =>
            res.json("Entry saved!"))
        .catch(err => res.status(404).json({success: false}));
});

//find a specific entry from the database
router.route('/:id').get((req, res) => {
  Entries.findById(req.params.id)
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

//edit a specific entry from the database and update it
router.route('/update/:id').post((req, res) => {
  Entries.findById(req.params.id)
    .then(entries => {
      entries.entryContent = req.body.entryContent;
      entries.mood = req.body.mood;
      entries.prompt = Number(req.body.prompt);
        entries.date = Date.parse(req.body.date);
        
        //update part

      entries.save()
        .then(() => res.json('Entry updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Deleting a specific entry from the database
router.route('/:id').delete((req, res) => {
  Entries.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
});

    
module.exports = router;

