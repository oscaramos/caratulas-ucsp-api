const { basename } = require('path');

const link = process.env.NODE_ENV.includes('development') ? 'http://localhost:4000/' : 'https://caratulas-ucsp-api.herokuapp.com/';

const linkToCover = path => {
  return link + basename(path);
};

module.exports = linkToCover;