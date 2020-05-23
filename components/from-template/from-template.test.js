const fromTemplate = require('./from-template')
const { atUtils } = require('../rootUtils.utils')
const dataExample = require('../dataExample');

it('One student', () => {
  let templatePath = atUtils('caratula.tex');
  const data = dataExample.maleStudent;
  return fromTemplate(templatePath, data).then(renderedString => {
    console.log(renderedString);
  });
});

it('Multiple students', () => {
  let templatePath = atUtils('caratula.tex');
  const data = dataExample.multipleStudents;
  return fromTemplate(templatePath, data).then(renderedString => {
    console.log(renderedString);
  });
});