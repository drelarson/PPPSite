const User = require('../models/users')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(

	function(userName, password, done) {
		User.findOne({ userName,userName }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy