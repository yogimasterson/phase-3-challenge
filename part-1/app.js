const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Welcome!!!<br>Please use the following routes:<br>/api/supported-operations<br>/api/square<br>/api/compute')
})

app.get('/api/supported-operations', (req, res) => {
	const json = JSON.stringify({
		"/": "division",
    "+": "addition",
    "-": "subtration",
    "*": "multiplication"
	})
	res.send(json)
})

app.get('/api/square', (req, res) => {
	const num = req.query.number
	const json = JSON.stringify({
		"result": num * num
	})
	res.send(json)
})

app.listen(3000, () => {
	console.log('App is listening on port 3000!')
})