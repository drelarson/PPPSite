const express = require('express')
const router = express.Router();
const passport = require('../passport');


// import user model
const User = require('../models/users')

// @route GET api/user/test
// @description tests user route
// @access Public
router.get('/test', (req, res) => res.send('User route testing!'));
//this is the passport route
// router.post('/new-user', (req, res) => {
//     console.log('user signup');

//     const { firstName, lastName,userName,userImage, password } = req.body;
//     // ADD VALIDATION
//     User.findOne({ userName: userName }, (err, user) => {
//         if (err) {
//             console.log('User.js post error: ', err);
//         } else if (user) {
//             res.json({
//                 error: `Sorry, already a user with the username: ${userName}`,
//             });
//         } else {
//             const newUser = new User({
//                 firstName: firstName,
//                 lastName: lastName,
//                 userName: userName,
//                 password: password,
//                 userImage: userImage
//             });
//             newUser.save((err, savedUser) => {
//                 if (err) return res.json(err);
//                 res.json(savedUser);
//             });
//         }
//     });
// });

// router.post(
//     '/verify-user',
//     // local means it uses username and password, uses the strategy defined in local strategy
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('logged in', req.user);
//         var userInfo = {
//             userName: req.user.userName,
       
//         };
//         res.send(userInfo);
//     }
// );


// @route POST api/
// @description Verify Users
// @access Public
router.post('/verify-user', (req, res) => {
    const {userName, password} = req.body;
    User.findOne({userName: userName})
        .then((user) => {
            if(user.password === password) {
                res.status(200).send(user)
                console.log('works')
            }
            else{
                res.status(401).json({"error": "password incorrent"})
            }
        })
        .catch((err) =>
            res.status(404).json({ "error": 'No user found' })
        );
});
//@route GET api/
// @description Get all users
// @access Public
router.get('/', (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(404).json({ nouserfound: 'No User Found' }))
});

// @route GET api/:userName
// @description Get single user by User Name
// @access Public
router.get('/userName-search:userName', (req, res) => {
    User.findById(req.params.userName)
        .then((user) => res.json(user))
        .catch((err) => res.status(404).json({ nouerfound: 'No User found' }));
});

// @route GET api/all data 
// @description Get all data 
// @access Public

router.get('/getAll', (req, res) => {
    User.find()
        .then((users) => res.json(users), console.log("info found"))
        .catch((err) => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route GET api/:firstName
// @description Get single user by firstName 
// @access Public
router.get('/firstName-search/:firstName', (req, res) => {
    User.find({ firstName: req.params.firstName })
        .then((users) => res.json(users))
        .catch((err) => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route POST api/
// @description add/save user
// @access Public
http://localhost:5000/api/user/new-user/
router.post('/new-user', (req, res) => {
    console.log('also clicked')
    User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this user' })
        );
});

// @route PUT api/:update record
// @description Update record
// @access Public
// http://localhost:5000/api/user/update-record/
router.put('/update-record/:id', (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route PATCH api/:id
// @description Update Record
// @access Public
// http://localhost:5000/api/user/update-record/
router.patch('/update-record/:id', (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete user by id
// @access Public
router.delete('/delete-user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => res.json({ mgs: 'User entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such user' }));
});

module.exports = router;