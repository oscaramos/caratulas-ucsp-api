const latex = require('node-latex')
const fs = require('fs')

const { atUtils } = require("../rootUtils.utils");

const options = {
  inputs: atUtils()
}

const compileLatex = (inTexPath, outPdfPath) => {
  console.log(inTexPath);
  console.log(outPdfPath);
  const input = fs.createReadStream(inTexPath)
  const output = fs.createWriteStream(outPdfPath)

  const pdf = latex(input, options)
  pdf.pipe(output)

  return new Promise((resolve, reject) => {
    pdf.on('finish', () => resolve());
    pdf.on('error', err => reject(err));
  });
}

module.exports = compileLatex;