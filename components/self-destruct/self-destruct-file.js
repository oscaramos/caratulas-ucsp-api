const fs = require('fs')

const selfDestructFile = (path, timeout, onDestruct) => {
	setTimeout(() => {
		// Delete file
		fs.unlink(path, (err) => {
			if (err) throw err
			if (onDestruct) {
				onDestruct()
			}
		})
	}, timeout)
}

module.exports = selfDestructFile
