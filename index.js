const express = require('express');
const cors = require('cors');
const morganBody = require('morgan-body');
const generateCover = require('./controllers/generateCover');
const { saveAnswer } = require('./controllers/saveAnswer');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static('public'));

morganBody(app);

app.post('/', (req, res) => generateCover(req, res));

app.post('/answer', (req, res) => {
  const answer = req.body.answer
  console.log("respuesta!: " + answer)
  saveAnswer(answer)
  res.send("Answer saved")
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
