const createTmpFromTemplate = require('../create-tmp-from-template/create-tmp-from-template');
const compileLatex = require('../compile-latex/compile-latex');
const getOutputPdfName = require('../get-output-pdf-name/get-output-pdf-name');

const compileCover = async data => {
  const tmp = await createTmpFromTemplate(data);
  const pdfPath = getOutputPdfName(data);
  await compileLatex(tmp.path, pdfPath);
  tmp.cleanup();
  return pdfPath;
}

module.exports = compileCover;
