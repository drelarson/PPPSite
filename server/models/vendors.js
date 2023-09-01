const mongoose = require('mongoose');
require('dotenv').config()

const VendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true,
    },
    vendorContactName:{String},
    vendorPhone:{Number},
    vendorWebsite:{String},
    vendorAddress: {String},
    vendorCity: {String},
    vendorState: {String},
    vendorZipcode: {String},
    vendorProjects:[String],

},
    {
        timestamps: true,
    }
);

module.exports = Vendor = mongoose.model('vendor', VendorSchema);
