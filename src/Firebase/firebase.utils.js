import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWt5K2d1mIdswZTytb8CDKOf0yFn6r0G4",
  authDomain: "ang-clothing.firebaseapp.com",
  projectId: "ang-clothing",
  storageBucket: "ang-clothing.appspot.com",
  messagingSenderId: "426827057493",
  appId: "1:426827057493:web:10f65d3a673750bc66c7dc",
  measurementId: "G-DYWQ7BYJVY"
};

firebase.initializeApp(firebaseConfig);


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;