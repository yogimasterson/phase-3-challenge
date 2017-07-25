const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: false }))

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


app.get('/api/square', (req, res) => {
  const num = req.query.number
  res.send({"result": num * num})
})

app.post('/api/compute', (req, res) => {
  const operator = req.body.operator
	const operands = req.body.operands
	console.log(operator)

  if (operator === '-') {
    res.send({"result": operands[0] - operands[1]})
  }
  if (operator === '*') {
    res.send({"result": operands[0] * operands[1]})
  }
  if (operator === '/') {
    res.send({"result": operands[0] / operands[1]})
  }
  if (operator === '+') {
    res.send({"result": parseInt(operands[0]) + parseInt(operands[1]) })
  }
  else {
    res.status(404).send({"error": "invalid operator ?. Valid operators are /, +, -, *"})
  }

})

app.listen(3000, () => {
	console.log('App is listening on port 3000!')
})