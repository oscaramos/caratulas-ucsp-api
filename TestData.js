const maleStudent =
  {
    career: 'Computer Science',
    course: 'Curso final de carrera',
    work: 'Trabajo final de carrera',
    gender: 'M',
    names: ['Nombre1 Nombre2 Apellido1 Apellido2'],
    semester: 'Semestre X',
    year: '2020-1',
  }

const femaleStudent =
  {
    career: 'Computer Science',
    course: 'Curso final de carrera',
    work: 'Trabajo final de carrera',
    gender: 'F',
    names: ['Nombre1 Nombre2 Apellido1 Apellido2'],
    semester: 'Semestre X',
    year: '2020-1',
  }

const multipleStudents = (numStudents) => (
  {
    career: 'Computer Science',
    course: 'Curso final de carrera',
    work: 'Trabajo final de carrera',
    names:  [...[...Array(numStudents).keys()].map(_ => 'Nombre1 Nombre2 Apellido1 Apellido2')],
    semester: 'Semestre X',
    year: '9999-9'
  }
)

module.exports = {maleStudent, femaleStudent, multipleStudents};
