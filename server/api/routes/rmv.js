const {Router} = require('express')
const router = Router()
const https = require('https')
require('dotenv').config()

router.get('/rmv', (req, resp) => {
	let apiKey = process.env.RMV_API_KEY
	https.get(`https://www.rmv.de/hapi/departureBoard?accessId=${apiKey}&id=${req.query.station}&direction=${req.query.direction}&format=json`, (res) => {
		const { statusCode } = res
		const contentType = res.headers['content-type']

		let error
		if (statusCode !== 200) {
			error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`)
		} else if (!/^application\/json/.test(contentType)) {
			error = new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`)
		}
		if (error) {
			console.error(error.message)
			// consume response data to free up memory
			res.resume()
			// return epty array as response so that the request doesn't hang
			resp.json([])
			return
		}

		res.setEncoding('utf8')
		let rawData = ''

		res.on('data', (chunk) => { rawData += chunk })
		res.on('end', () => {
			try {
				let parsedData = JSON.parse(rawData)
				resp.json(parsedData)
			} catch (e) {
				console.error(e.message)
			}
		})
	}).on('error', (e) => {
		console.error(`Got error: ${e.message}`)
	})
})

module.exports = router
