const mergeNames = names => names.join(String.raw` \\ `)

const fillData = (data) => {
    if(data.names.length > 1)
      return {
        ...data,
        names: mergeNames(data.names),
        footer: 'Los alumnos declaran haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo'
      };
    else if(data.gender === 'M')
      return {
        ...data,
        footer: 'El alumno declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo'
      };
    else
      return {
        ...data,
        footer: 'La alumna declara haber realizado el presente trabajo de acuerdo a las normas de la Universidad Católica San Pablo'
      };
}

module.exports = fillData;
