const path = require('path')

const atUtils = file => path.resolve(path.join(__dirname, '../assets'), file ? file : '')
const atPublic = file => path.resolve(path.join(__dirname, '../public'), file ? file : '')

module.exports = {
	atUtils,
	atPublic
}
