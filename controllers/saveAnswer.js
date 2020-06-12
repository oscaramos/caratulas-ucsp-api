const { db } = require('../firebase');

const saveAnswer = (answer) => {
  return db.collection("Answers").add({
    respuesta: answer
  });
}

// Returns an array with all answers
// Example: ['5 stars', 'the best app ever seen', 'good']
const getAllAnswers = () => {
  return db.collection('Answers').get()
    .then((snapshot) => {
      const answers = [];
      snapshot.forEach((doc) => {
        answers.push(doc.data().respuesta);
      });
      return answers
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}

module.exports = {
  saveAnswer,
  getAllAnswers
};
