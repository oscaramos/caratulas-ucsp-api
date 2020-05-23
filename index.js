const express = require('express');
const cors = require('cors');
const { generateCover } = require('./controllers/generateCover');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static('public'));

app.post('/', (req, res) => generateCover(req, res));

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});