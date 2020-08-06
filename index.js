const express = require('express')
const cors = require('cors')
const morganBody = require('morgan-body')
const path = require('path')

const generateCover = require('./controllers/generateCover')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

morganBody(app)

app.post('/', (req, res) => generateCover(req, res))

const port = process.env.PORT || 4000
app.listen(port, () => {
	console.log(`Listening on port ${port}!`)
})
