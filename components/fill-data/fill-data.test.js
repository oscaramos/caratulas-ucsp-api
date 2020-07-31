const fillData = require('./fill-data')
const dataTest = require('../../TestData')


describe('Fill footer data', () => {
	const expectFooter = (data, footer) => expect(fillData(data).footer).toEqual(footer)

	it('it is male then fill male footer', () => {
		expectFooter(dataTest.maleStudent, 'El alumno declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo')
	})

	it('it is female then fill female footer', () => {
		expectFooter(dataTest.femaleStudent, 'La alumna declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo')
	})

	it('it is multiple person then fill multiple footer', () => {
		expectFooter(dataTest.multipleStudents(2), 'Los alumnos declaran haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo')
	})
})

describe('Fill names data', () => {
	const expectNames = (data, names) => expect(fillData(data).names).toEqual(names)

	it('they are multiple person then fill separated names', () => {
		expectNames(dataTest.multipleStudents(2), dataTest.multipleStudents(2).names.join(String.raw` \\ `))
	})
})


