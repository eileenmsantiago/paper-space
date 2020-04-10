const router = require("express").Router();
let Prompts = require("../models/prompts.model");

router.route("/").get((req, res) => {
    Prompts.find()
    .then(prompts => res.json(prompts))
    .catch(err => res.status(400).json('Error: ' + err));
});

