const TestData = require('../TestData')
const generateCover = require('./generateCover')

describe('When x request a cover then generate a cover and response with a link to the cover', () => {
	const expectReturnLink = testCase => {
		const req = {
			body: testCase
		}
		const res = {
			send: jest.fn()
		}
		expect.assertions(2)
		return generateCover(req, res).then(() => {
			expect(res.send).toBeCalled()
			expect(res.send).toHaveBeenCalledWith(
				expect.objectContaining({
					link: expect.stringMatching(new RegExp('^http://localhost:4000/[a-zA-Z0-9]+.pdf$'))
				})
			)
		})
	}

	test('one male student then generate and response w/ a link', () => {
		return expectReturnLink(TestData.maleStudent)
	}, 10000)

	test('one female student then generate and response w/ a link', () => {
		return expectReturnLink(TestData.femaleStudent)
	})

	test('Two students then generate and response w/ a link', () => {
		return expectReturnLink(TestData.multipleStudents(2))
	})

	test('Tree students then generate and response w/ a link', () => {
		return expectReturnLink(TestData.multipleStudents(3))
	})

	test('Six students then generate and response w/ a link', () => {
		return expectReturnLink(TestData.multipleStudents(6))
	})

	test('Eight students then generate and response w/ a link', () => {
		return expectReturnLink(TestData.multipleStudents(8))
	})
})

describe('When data is invalid then response w/ a code error 400(bad request)', () => {
	const extracted = (badCase) => {
		const req = {
			body: badCase
		}
		const res = {
			send: jest.fn(),
			status: jest.fn(() => ({
				send: jest.fn()
			}))
		}
		expect.assertions(2)
		return generateCover(req, res).then(() => {
			expect(res.status).toBeCalled()
			expect(res.status).toHaveBeenCalledWith(400)
		})
	}

	test('On empty body', () => {
		return extracted([])
	})
})
