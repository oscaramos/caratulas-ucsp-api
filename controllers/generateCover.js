const compileCover = require('../components/compile-cover/compile-cover');
const linkToCover = require('../components/link-to-cover/link-to-cover');

const compileAndGetLink = async data => {
  const path = await compileCover(data);
  return linkToCover(path);
};

const generateCover = async (req, res) => {
  try {
    const data = req.body;
    const link = await compileAndGetLink(data);
    res.send({ link });
  } catch (e) {
    console.log(e);
    res.status(400).send('Error while compiling cover');
  }
};

module.exports = { generateCover };
