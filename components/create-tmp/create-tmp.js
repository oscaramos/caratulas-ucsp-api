const tmp = require('tmp-promise');
const fs = require('fs');

const options = {
  keep: true
}

const createTmp = (content) => {
  return tmp.file(options)
    .then(o => {
      fs.writeFileSync(o.path, content);
      return o;
    }
  );
};

module.exports = createTmp;