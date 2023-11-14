import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAmAzMI8JBFpdPXnbehCd7D5ebd03qrSuY",
  authDomain: "bicicleta-34b10.firebaseapp.com",
  projectId: "bicicleta-34b10",
  storageBucket: "bicicleta-34b10.appspot.com",
  messagingSenderId: "897070562644",
  appId: "1:897070562644:web:1685953462f9cb19885cc1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
