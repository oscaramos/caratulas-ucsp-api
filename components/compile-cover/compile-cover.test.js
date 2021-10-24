const compileCover = require("./compile-cover");
const dataTest = require("../../TestData");

it("One male student", () => {
  expect.assertions(1);
  return compileCover(dataTest.maleStudent)
    .then((path) => {
      console.log(path);
      expect(path).toBeDefined();
    })
    .catch(console.log);
});

it("One female student", () => {
  expect.assertions(1);
  return compileCover(dataTest.femaleStudent)
    .then((path) => {
      console.log(path);
      expect(path).toBeDefined();
    })
    .catch(console.log);
});

it("Multiple students", () => {
  expect.assertions(1);
  return compileCover(dataTest.multipleStudents(2))
    .then((path) => {
      console.log(path);
      expect(path).toBeDefined();
    })
    .catch(console.log);
});
