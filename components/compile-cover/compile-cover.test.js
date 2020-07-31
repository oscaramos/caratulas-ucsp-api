const compileCover = require('./compile-cover')
const dataTest = require('../../TestData')
const fillData = require('../fill-data/fill-data')

it('One male student', () => {
	expect.assertions(1)
	const data = fillData(dataTest.maleStudent)
	return compileCover(data)
		.then(path => {
			console.log(path)
			expect(path).toBeDefined()
		})
		.catch(console.log)
})

it('One female student', () => {
	expect.assertions(1)
	const data = fillData(dataTest.femaleStudent)
	return compileCover(data)
		.then(path => {
			console.log(path)
			expect(path).toBeDefined()
		})
		.catch(console.log)
})

it('Multiple students', () => {
	expect.assertions(1)
	const data = fillData(dataTest.multipleStudents(2))
	return compileCover(data)
		.then(path => {
			console.log(path)
			expect(path).toBeDefined()
		})
		.catch(console.log)
})
