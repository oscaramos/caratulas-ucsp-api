const uniqueFilename = require('unique-filename')
const { atPublic } = require('../../utils/utils')

const getOutputPdfName = () => uniqueFilename(atPublic())+'.pdf'

module.exports = getOutputPdfName
