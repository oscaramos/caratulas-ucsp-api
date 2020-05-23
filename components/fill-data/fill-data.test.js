const fillData = require('./fill-data');
const dataExample = require('../dataExample');

it('When its male then fill male footer', () => {
  const data = dataExample.maleStudent;
  const newdata = fillData(data);
  expect(newdata.footer).toEqual('El alumno declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo');
});

it('When its female then fill female footer', () => {
  const data = dataExample.femaleStudent;
  const newdata = fillData(data);
  expect(newdata.footer).toEqual('La alumna declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo');
});

it('When its multiple person then fill multiple footer', () => {
  const data = dataExample.multipleStudents;
  const newdata = fillData(data);
  expect(newdata.footer).toEqual('Los alumnos declaran haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo');
});

it('When multiple person then fill separated names', () => {
  const data = dataExample.multipleStudents;
  const newdata = fillData(data);
  expect(newdata.names).toEqual(String.raw`${data.names[0]} \\ ${data.names[1]}`);
});