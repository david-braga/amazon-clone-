import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAAgkDpqGHaE4ypuJ1ktONxFG2Ea45dZhs",
    authDomain: "clone-e3fa6.firebaseapp.com",
    projectId: "clone-e3fa6",
    storageBucket: "clone-e3fa6.appspot.com",
    messagingSenderId: "701784073979",
    appId: "1:701784073979:web:3b4713b18155310ab6325e",
    measurementId: "G-Q1X95TEYHV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 
