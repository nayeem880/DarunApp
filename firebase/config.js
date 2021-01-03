import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAChHtOI0KJa9zTJ9Z9Kk3Q7s8ZBuIu760",
    authDomain: "darun-7621c.firebaseapp.com",
    projectId: "darun-7621c",
    storageBucket: "darun-7621c.appspot.com",
    messagingSenderId: "462893937764",
    appId: "1:462893937764:web:b5539a7cc1d405ad7a5b71",
    measurementId: "G-EMNE1HELVG"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

