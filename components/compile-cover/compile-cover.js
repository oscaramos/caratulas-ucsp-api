const uniqueFilename = require("unique-filename");
const { renderTemplateFile } = require("template-file");

const fillData = require("../fill-data/fill-data");
const compileLatex = require("../compile-latex/compile-latex");
const createTmp = require("../create-tmp/create-tmp");
const { atUtils, atPublic } = require("../../utils/utils");

const getUniquePdfName = () => uniqueFilename(atPublic()) + ".pdf";

const createTemporalFileAndCleanup = async (tmpContent, callback) => {
  const tmp = await createTmp(tmpContent);
  callback(tmp.path);
  tmp.cleanup();
};

const compileCover = async (raw_data) => {
  const data = fillData(raw_data);

  const latexTemplate = await renderTemplateFile(atUtils("caratula.tex"), data);
  const uniquePdfName = getUniquePdfName(data);

  await createTemporalFileAndCleanup(latexTemplate, (tmpPath) =>
    compileLatex(tmpPath, uniquePdfName)
  );

  return uniquePdfName;
};

module.exports = compileCover;
