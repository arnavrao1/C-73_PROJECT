import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB91uEQWy_RupSvHBiuZ3gAzD57fvM49Ss",
  authDomain: "hw-71-f039a.firebaseapp.com",
  projectId: "hw-71-f039a",
  storageBucket: "hw-71-f039a.appspot.com",
  messagingSenderId: "1055694194482",
  appId: "1:1055694194482:web:eb40d966310910decab92b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
