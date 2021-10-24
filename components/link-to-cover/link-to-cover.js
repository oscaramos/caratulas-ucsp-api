const { basename } = require("path");

const port = process.env.PORT || 4000;

const linkToCover = (hostname, path) => {
  return `${hostname}:${port}/${basename(path)}`;
};

module.exports = linkToCover;
