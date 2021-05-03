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

export async function createUserProfileDocument(userAuth, aditionalData) {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

export function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = firestore.collection(collectionKey);
}


firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;