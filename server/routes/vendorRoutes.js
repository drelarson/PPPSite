const express = require('express');
const router = express.Router();

// import vendor model
const Vendor = require('../models/vendors')

// @route GET api/vendor/test
// @description tests vendor route
// @access Public
router.get('/test', (req, res)=> res.send ('Vendor route testing!'));

// @route GET api/
// @description Get all vendors
// @access Public
router.get('/', (req,res)=>{
    Vendor.find()
    .then((vendors)=>res.json(vendors))
    .catch((err)=> res.status(404).json({ novendorfound:'No vendor Found'}))
});

// @route GET api/:vendorName
// @description Get single vendor by vendor Name
// @access Public
router.get('/vendorName-search:vendorName', (req, res) => {
    Vendor.findById(req.params.vendorName)
        .then((vendor) => res.json(vendor))
        .catch((err) => res.status(404).json({ nouerfound: 'No vendor found' }));
});

// @route GET api/all data 
// @description Get all data 
// @access Public

router.get('/getAll', (req, res) => {
    Vendor.find()
        .then((vendors) => res.json(vendors), console.log("info found"))
        .catch((err) => res.status(404).json({ novendorfound: 'No vendor found' }));
});

// @route GET api/:firstName
// @description Get single vendor by firstName 
// @access Public
router.get('/firstName-search/:firstName', (req, res) => {
    Vendor.find({ firstName: req.params.firstName })
        .then((vendors) => res.json(vendors))
        .catch((err) => res.status(404).json({ novendorfound: 'No vendor found' }));
});

// @route POST api/
// @description add/save vendor
// @access Public
// http://localhost:5000/api/vendor/new-vendor/
router.post('/new-vendor', (req, res) => {
    console.log('also clicked')
    Vendor.create(req.body)
        .then((vendor) => res.json({ msg: 'vendor added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this vendor' })
        );
});

// @route PUT api/:update record
// @description Update record
// @access Public
// http://localhost:5000/api/vendor/update-record/
router.put('/update-record/:id', (req, res) => {
  
    Vendor.findByIdAndUpdate(req.params.id, req.body)
        .then((vendor) => {
            res.status(201).send(vendor)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route PATCH api/:id
// @description Update Record
// @access Public
// http://localhost:5000/api/vendor/update-record/
router.patch('/update-record/:id', (req, res) => {
  
    Vendor.findByIdAndUpdate(req.params.id, req.body)
        .then((vendor) => {
            res.status(201).send(vendor)
        })
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete vendor by id
// @access Public
router.delete('/delete-vendor/:id', (req, res) => {
    Vendor.findByIdAndRemove(req.params.id)
        .then(vendor => res.json({ mgs: 'vendor entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such vendor' }));
});

module.exports = router;