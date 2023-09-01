const express = require('express');
const router = express.Router();

// import project model
const Project = require('../models/project')

// @route GET api/project/test
// @description tests project route
// @access Public
router.get('/test', (req, res)=> res.send ('project route testing!'));


// @route GET api/
// @description Get all projects
// @access Public
router.get('/getAll', (req,res)=>{
    Project.find()
    .then((projects)=>res.json(projects))
    .catch((err)=> res.status(404).json({ noprojectfound:'No project Found'}))
});

// @route GET api/:projectName
// @description Get single project by project Name
// @access Public
router.get('/projectName-search:projectName', (req, res) => {
    Project.findById(req.params.projectName)
        .then((project) => res.json(project))
        .catch((err) => res.status(404).json({ nouerfound: 'No project found' }));
});

// @route GET api/all data 
// @description Get all data 
// @access Public

router.get('/all', (req, res) => {
    Project.find()
        .then((projects) => res.json(projects), console.log("info found"))
        .catch((err) => res.status(404).json({ noprojectfound: 'No project found' }));
});

// @route POST api/
// @description add/save project
// @access Public
// http://localhost:5000/api/project/new-project/
router.post('/new-project', (req, res) => {
    Project.create(req.body)
        .then((project) => res.status(201).send(project))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this project' })
        );
});

// @route PUT api/:add Comment
// @description Update record
// @access Public
// http://localhost:5000/api/project/add-comment/
router.put('/add-comment/:id', (req, res) => {
  
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((project) => {
            res.status(201).send(project)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route PUT api/:add Milestone
// @description Update record
// @access Public
// http://localhost:5000/api/project/add-milestone/
router.put('/add-milestone/:id', (req, res) => {
  
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((project) => {
            res.status(201).send(project)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route PUT api/:update record
// @description Update record
// @access Public
// http://localhost:5000/api/project/update-record/

router.put('/update-record/:id', (req, res) => {
  
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then((project) => {
            res.status(201).send(project)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});


// @route PATCH api/:id
// @description Update Record
// @access Public
// http://localhost:5000/api/project/update-record/
router.patch('/update-record/:id', (req, res) => {
  
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then((project) => {
            res.status(201).send(project)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route PUT api/:id
// @description Update book
// @access Public
router.put('/edit/:id', (req, res) => {
    console.log(req.body)
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((project) => res.status(201).send(project))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete project by id
// @access Public
router.delete('/delete-project/:id', (req, res) => {
    Project.findByIdAndRemove(req.params.id)
        .then((project) => res.status(200).send(project))
        .catch(err => res.status(404).json({ error: 'No such project' }));
});

module.exports = router;