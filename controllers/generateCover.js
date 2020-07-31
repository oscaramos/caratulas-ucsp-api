const compileCover = require('../components/compile-cover/compile-cover')
const linkToCover = require('../components/link-to-cover/link-to-cover')

const generateCover = async (req, res) => {
	try {
		const raw_data = req.body
		const path = await compileCover(raw_data)
		const link = linkToCover(path)
		res.send({ link })
	} catch (e) {
		console.log(e)
		res.status(400).send('Error while compiling cover')
	}
}

module.exports = generateCover
