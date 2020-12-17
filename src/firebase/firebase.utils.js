import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIxR4W80zta_5dPfqypXqwEDGwaxoWCzM',
  authDomain: 'clothing-shop-app.firebaseapp.com',
  databaseURL: 'https://clothing-shop-app-default-rtdb.firebaseio.com',
  projectId: 'clothing-shop-app',
  storageBucket: 'clothing-shop-app.appspot.com',
  messagingSenderId: '206879735951',
  appId: '1:206879735951:web:6b8078ed13ef1a6b7570fa',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
