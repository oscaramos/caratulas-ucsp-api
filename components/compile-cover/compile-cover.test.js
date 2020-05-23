const compileCover = require('./compile-cover');
const dataExample = require('../dataExample');

it('One male student', () => {
  expect.assertions(1);
  const data = dataExample.maleStudent;
  return compileCover(data)
    .then(path => {
      console.log(path);
      expect(path).toBeDefined();
    })
    .catch(console.log)
});

it('One female student', () => {
  expect.assertions(1);
  const data = dataExample.femaleStudent;
  return compileCover(data)
    .then(path => {
      console.log(path);
      expect(path).toBeDefined();
    })
    .catch(console.log)
});

it('Multiple students', () => {
  expect.assertions(1);
  const data = dataExample.multipleStudents;
  return compileCover(data)
    .then(path => {
      console.log(path);
      expect(path).toBeDefined();
    })
    .catch(console.log)
});