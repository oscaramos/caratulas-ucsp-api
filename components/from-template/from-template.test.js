const fromTemplate = require('./from-template')
const { atUtils } = require('../rootUtils.utils')
const dataTest = require('../../TestData');

it('One student', () => {
  let templatePath = atUtils('caratula.tex');
  const data = dataTest.maleStudent;
  return fromTemplate(templatePath, data).then(renderedString => {
    console.log(renderedString);
  });
});

it('Multiple students', () => {
  let templatePath = atUtils('caratula.tex');
  const data = dataTest.multipleStudents(2);
  return fromTemplate(templatePath, data).then(renderedString => {
    console.log(renderedString);
  });
});
