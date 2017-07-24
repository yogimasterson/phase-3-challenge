const express = require('express')
const app = express()

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
	const answer = num * num
	const json = JSON.stringify({
		"result": answer 
	})
	res.send(json)
})

let opperand = ''
let a = ''
let b = ''

app.get('/api/compute', (req, res) => {
	opperand = req.query.opperand
	a = req.query.a
	b = req.query.b
})

app.post('/api/compute', (req, res) => {
	res.send(a, operand, b)
})

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})