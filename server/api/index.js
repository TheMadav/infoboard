const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const background = require('./routes/background')
const weather = require('./routes/weather')
const openweather = require('./routes/openweather')
const nasa = require('./routes/nasa')
const calendar = require('./routes/calendar')
const rmv = require('./routes/rmv')
<<<<<<< HEAD

=======
>>>>>>> madav-master
// Import API Routes
app.use(background)
app.use(openweather)
app.use(weather)
app.use(openweather)
app.use(nasa)
app.use(calendar)
app.use(rmv)

// Export the server middleware
module.exports = {
	path: '/api',
	handler: app
}
