const { basename } = require('path');

const link = 'http://localhost:4000/';

const linkToCover = path => {
  return link+basename(path);
};

module.exports = linkToCover;