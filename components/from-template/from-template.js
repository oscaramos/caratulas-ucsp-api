const { renderTemplateFile } = require('template-file');

const fromTemplate = (templatePath, data) => {
    return renderTemplateFile(templatePath, data);
}

module.exports = fromTemplate;
