const createTmp = require('./create-tmp')
const fs = require('fs')

it('test create-tmp', () => {
	expect.assertions(2)
	const content = 'es temporal'
	return createTmp(content).then(o => {
		console.log('File: ', o.path)
		o.cleanup()
		expect(fs.existsSync(o.path)).toBe(true)
		expect(fs.readFileSync(o.path).toString()).toBe(content)
	})
})