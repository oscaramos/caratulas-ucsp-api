const lineTemplate = '----------------------------------'
const latexNewline = String.raw` \\ `

const mergeNames = names => names.join(latexNewline) + latexNewline
const repeatWithSpacesBetween = times => (lineTemplate + ' ').repeat(times).slice(0, -1)

const fillData = (data) => {

	if(data.names.length > 1)
		return {
			...data,
			names: mergeNames(data.names),
			footer: 'Los alumnos declaran haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo',
			lines: repeatWithSpacesBetween(data.names.length)
		}
	else if(data.gender === 'M')
		return {
			...data,
			footer: 'El alumno declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo',
			lines: lineTemplate
		}
	else
		return {
			...data,
			footer: 'La alumna declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo',
			lines: lineTemplate
		}
}

module.exports = fillData
