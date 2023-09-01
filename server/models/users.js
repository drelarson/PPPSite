const mongoose = require('mongoose');
require('dotenv').config()
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');
// mongoose.promise = Promise;

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    }, 
    lastName:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    userImage:{
        type: String,
   
    },

},
{
    timestamps: true,
  }
);

// UserSchema.methods = {
//     checkPassword: function (inputPassword) {
//         return bcrypt.compareSync(inputPassword, this.password);
//     },
//     hashPassword: (plainTextPassword) => {
//         return bcrypt.hashSync(plainTextPassword, 10);
//     },
// };

// // Define hooks for pre-saving
// UserSchema.pre('save', function (next) {
//     if (!this.password) {
//         console.log('models/user.js ::NO PASSWORD PROVIDED::');
//         next();
//     } else {
//         console.log('models/user.js hashPassword stored in pre save');

//         this.password = this.hashPassword(this.password);
//         next();
//     }
// });

module.exports = User = mongoose.model('user', UserSchema);
