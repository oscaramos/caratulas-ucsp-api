const compileCover = require('../components/compile-cover/compile-cover')
const linkToCover = require('../components/link-to-cover/link-to-cover')
const selfDestructFile = require('../components/self-destruct/self-destruct-file')

const generateCover = async (req, res) => {
	try {
		const raw_data = req.body
		const path = await compileCover(raw_data)
		const link = linkToCover(req.hostname, path)
		res.send({ link })

		selfDestructFile(path, 10*60*1000, () => {
			console.log('its gone')
		})
	} catch (e) {
		console.log(e)
		res.status(400).send('Error while compiling cover')
	}
}

module.exports = generateCover
