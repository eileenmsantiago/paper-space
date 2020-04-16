const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const date = Date.parse(req.body.date);

    const newUser = new User({
        username,
        email,
        password,
        date
    });

    newUser.save()
        .then(() => res.json('New PaperSpace User has been added!'))
        .catch(err => res.status(400).json({success: false}));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json({success: false}));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(users => {
            users.username = req.body.username;
            users.email = req.body.email;
            users.password = req.body.password;
            users.date = Date.parse(req.body.date);

        users.save()
            .then(() => res.json('PaperSpace User updated!'))
            .catch(err => res.status(400).json({success: false}));
        })
        .catch(err => res.status(400).json({success: false}));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('PaperSpace User deleted.'))
        .catch(err => res.status(404).json({success: false}));
})

module.exports = router;