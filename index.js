const express = require('express');
const cors = require('cors');
const { generateCover } = require('./controllers/generateCover');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static('public'));

app.post('/', (req, res) => generateCover(req, res));

app.listen(4000, function () {
  console.log('Listening on port 4000!');
});