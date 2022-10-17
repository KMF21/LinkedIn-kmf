import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAOUE1xNLgNSF_kkn7Wt8eBUJjUtNNNQJw",
    authDomain: "linkedin-kmf-af4ee.firebaseapp.com",
    projectId: "linkedin-kmf-af4ee",
    storageBucket: "linkedin-kmf-af4ee.appspot.com",
    messagingSenderId: "126792005210",
    appId: "1:126792005210:web:c6d0c8e9ad5dffbcc88a63"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };