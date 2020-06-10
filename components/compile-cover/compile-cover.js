const uniqueFilename = require('unique-filename');
const compileLatex = require('../compile-latex/compile-latex');
const fillData = require('../fill-data/fill-data');
const createTmpFromTemplate = require('../create-tmp-from-template/create-tmp-from-template');

const { atPublic } = require('../rootUtils.utils')
const getOutputPdfName = () => uniqueFilename(atPublic())+'.pdf';

const compileCover = async data => {
  data = fillData(data);
  const tmp = await createTmpFromTemplate(data);
  const pdfPath = getOutputPdfName(data);
  await compileLatex(tmp.path, pdfPath);
  tmp.cleanup();
  return pdfPath;
}

module.exports = compileCover;
