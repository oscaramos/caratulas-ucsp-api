const { renderTemplateFile } = require('template-file')

const fillData = require('../fill-data/fill-data')
const compileLatex = require('../compile-latex/compile-latex')
const getOutputPdfName = require('../get-output-pdf-name/get-output-pdf-name')
const createTmp  = require('../create-tmp/create-tmp')
const { atUtils } = require('../../utils/utils')

const compileCover = async raw_data => {
	const data = fillData(raw_data)

	const latexTemplate = await renderTemplateFile(atUtils('caratula.tex'), data)

	// Create an temporally file and with it compile the cover
	const tmp = await createTmp(latexTemplate)
	await compileLatex(tmp.path, getOutputPdfName(data))
	tmp.cleanup()

	return getOutputPdfName(data)
}

module.exports = compileCover
