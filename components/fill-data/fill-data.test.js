const fillData = require('./fill-data')
const dataTest = require('../../TestData')


describe('Should complete data when', () => {
	it('it is male then fill male footer', () => {
		const data = dataTest.maleStudent
		const newdata = fillData(data)
		expect(newdata.footer).toEqual('El alumno declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo')
	})

	it('it is female then fill female footer', () => {
		const data = dataTest.femaleStudent
		const newdata = fillData(data)
		expect(newdata.footer).toEqual('La alumna declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo')
	})

	it('it is multiple person then fill multiple footer', () => {
		const data = dataTest.multipleStudents(2)
		const newdata = fillData(data)
		expect(newdata.footer).toEqual('Los alumnos declaran haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo')
	})

	it('they are multiple person then fill separated names', () => {
		const data = dataTest.multipleStudents(2)
		const newdata = fillData(data)
		expect(newdata.names).toEqual(data.names.join(String.raw` \\ `))
	})
})


