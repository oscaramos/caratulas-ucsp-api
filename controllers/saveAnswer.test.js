const { saveAnswer, getAllAnswers } = require('./saveAnswer')

// Sin jest, motivo: https://github.com/firebase/firebase-js-sdk/issues/3096
// Ejecute como archivo javascript normal
// No con jest, no funca

// Enviar respuesta simple
const newAnswer = "PRUEBA 5 estrellitas";
getAllAnswers().then(answers => {
  const prevCount = answers.length;
  return saveAnswer(newAnswer).then(() => {
    return getAllAnswers().then(answers => {
      const currentCount = answers.length;
      if(currentCount === prevCount+1) {
        console.log("Tudo bem");
      } else {
        console.log("Hubo un problema al enviar");
      }
    })
  })
});
