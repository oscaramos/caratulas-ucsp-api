const { renderTemplateFile } = require('template-file')

const compileLatex = require('../compile-latex/compile-latex')
const getOutputPdfName = require('../get-output-pdf-name/get-output-pdf-name')
const createTmp  = require('../create-tmp/create-tmp')

const { atUtils } = require('../rootUtils.utils')

const compileCover = async data => {
	const latexTemplate = await renderTemplateFile(atUtils('caratula.tex'), data)

	// Create an temporally file and with it compile the cover
	const tmp = await createTmp(latexTemplate)
	await compileLatex(tmp.path, getOutputPdfName(data))
	tmp.cleanup()

	return getOutputPdfName(data)
}

module.exports = compileCover
