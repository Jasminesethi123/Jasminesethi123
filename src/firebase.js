import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo8kPJQJYTN3yjUVsmJKf_F7WCMvslxnY",
  authDomain: "challenge-dcd0c.firebaseapp.com",
  projectId: "challenge-dcd0c",
  storageBucket: "challenge-dcd0c.appspot.com",
  messagingSenderId: "745933389136",
  appId: "1:745933389136:web:020a77f9d01ad7dff10055",
  measurementId: "G-ZYYHPXKPBF"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };