const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyAltKCWTkJHwIxqKepgbUrVIvhYUE6ANwI",
  authDomain: "caratulas-ucsp.firebaseapp.com",
  databaseURL: "https://caratulas-ucsp.firebaseio.com",
  projectId: "caratulas-ucsp",
  storageBucket: "caratulas-ucsp.appspot.com",
  messagingSenderId: "144983122738",
  appId: "1:144983122738:web:cca6404c8b44baf456ed2b",
  measurementId: "G-ZCYR45Q7HE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

module.exports = {
  firebase,
  db
}
