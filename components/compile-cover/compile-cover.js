const compileLatex = require('../compile-latex/compile-latex');
const getOutputPdfName = require('../get-output-pdf-name/get-output-pdf-name');

const compileCover = async data => {
  const rendered = await renderTemplateFile(atUtils('caratula.tex'), data);
  const tmp = await createTmp(rendered);

  const pdfPath = getOutputPdfName(data);
  await compileLatex(tmp.path, pdfPath);
  tmp.cleanup();
  return pdfPath;
}

module.exports = compileCover;
