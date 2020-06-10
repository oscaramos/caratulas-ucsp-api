const fillData = require('../components/fill-data/fill-data');
const compileCover = require('../components/compile-cover/compile-cover');
const linkToCover = require('../components/link-to-cover/link-to-cover');

const generateCover = async (req, res) => {
  try {
    const data = fillData(req.body);
    const path = await compileCover(data);
    const link = linkToCover(path);
    res.send({ link });
  } catch (e) {
    console.log(e);
    res.status(400).send('Error while compiling cover');
  }
};

module.exports = generateCover;
