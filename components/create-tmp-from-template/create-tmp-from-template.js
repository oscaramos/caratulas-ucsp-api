const fromTemplate = require('../from-template/from-template');
const createTmp = require('../create-tmp/create-tmp');
const { atUtils } = require('../rootUtils.utils')

const createTmpFromTemplate = async (data) => {
  const rendered = await fromTemplate(atUtils('caratula.tex'), data);
  return await createTmp(rendered);
}

module.exports = createTmpFromTemplate;