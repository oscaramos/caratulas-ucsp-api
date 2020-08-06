const fs = require('fs')
const { join } = require('path')
const selfDestructFile = require('./self-destruct-file')

it('Self destruct after 1 second', (done) => {
	const filename = 'self-destructible-file.txt'
	const path = join(__dirname, filename)
	fs.writeFileSync(path, 'now this will be destroyed!')

	expect.assertions(1)
	selfDestructFile(path, 1000, () => {
		expect(fs.existsSync(path)).toBe(false)
		done()
	})
})
