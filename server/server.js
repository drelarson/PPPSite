const express = require('express')
const app = express()
const cors = require('cors')
const colores = require('colors')
const connectDB = require('./config/db')
// const dbConnection = require('./database')
// const session = require('express-session')
// const passport = require('./passport')
const projectRoutes = require('../server/routes/projectRoutes')
const userRoutes = require('../server/routes/userRoutes')
const vendorRoutes = require('../server/routes/vendorRoutes')
// const MongoStore = require('connect-mongo')(session)

require('dotenv').config

connectDB()


app.use(cors())

const port = process.env.PORT || 8000;

app.use(express.json())

app.use(express.urlencoded({extended: false}))

// Sessions
// app.use(
// 	session({
// 		secret: '59 days', //pick a random string to make the hash that is generated secure
// 		store: new MongoStore({ mongooseConnection: dbConnection  }),
// 		resave: false, //required
// 		saveUninitialized: false //required
// 	})
// )

// Passport
// app.use(passport.initialize())
// app.use(passport.session()) // calls the deserializeUser


app.use('/api/user', userRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/vendor', vendorRoutes)


app.listen(port, () => console.log(`Server is running on port ${port}`))
