const compileLatex = require('./compile-latex')
const fs = require('fs')
const { atPublic, atUtils } = require('../../utils/utils')

it('Compile latex then creates one pdf', () => {
	expect.assertions(1)
	return compileLatex(atUtils('caratula.tex'), atPublic('output.pdf'))
		.then(() => {
			expect(fs.existsSync(atPublic('output.pdf'))).toBe(true)
		})
		.catch(console.log)
}, 1000000)
