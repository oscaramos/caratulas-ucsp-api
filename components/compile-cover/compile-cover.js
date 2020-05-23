const uniqueFilename = require('unique-filename');
const compileLatex = require('../compile-latex/compile-latex');
const fillData = require('../fill-data/fill-data');
const createTmpFromTemplate = require('../create-tmp-from-template/create-tmp-from-template');

const { atPublic } = require('../rootUtils.utils')
const getOutputPdfName = () => uniqueFilename(atPublic())+'.pdf';

const compileCover = async data => {
  console.log("Empiezo compilacion");
  data = fillData(data);
  console.log("Llene datos");
  const tmp = await createTmpFromTemplate(data);
  console.log("Cree tmp");
  const pdfPath = getOutputPdfName(data);
  console.log("Cree output");
  await compileLatex(tmp.path, pdfPath);
  console.log("Finalmente compiloo");
  tmp.cleanup();
  console.log("Limpio cache");
  return pdfPath;
}

module.exports = compileCover;