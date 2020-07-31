const uniqueFilename = require('unique-filename')
const { atPublic } = require('../rootUtils.utils')

const getOutputPdfName = () => uniqueFilename(atPublic())+'.pdf'

module.exports = getOutputPdfName
