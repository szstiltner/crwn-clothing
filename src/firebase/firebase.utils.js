import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDkSQSUZyR6zkXTqM0eFja7-cXnhkqIUoU",
    authDomain: "crwn-db-288f5.firebaseapp.com",
    projectId: "crwn-db-288f5",
    storageBucket: "crwn-db-288f5.appspot.com",
    messagingSenderId: "823292252550",
    appId: "1:823292252550:web:fe82edda16700f0a9ddc07",
    measurementId: "G-1FZHNS7B65"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

