const compileLatex = require('./compile-latex');
const fs = require('fs');
const { atPublic, atUtils } = require("../rootUtils.utils");

it('Compile latex then creates one pdf', () => {
  expect.assertions(1);
  return compileLatex(atUtils('caratula.tex'), atPublic('output.pdf'))
    .then(() => {
      console.log('PDF generated!');
      expect(fs.existsSync(atPublic('output.pdf'))).toBe(true);
    })
    .catch(err => {
      console.log(err);
    });
}, 1000000);
