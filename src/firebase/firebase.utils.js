import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIxR4W80zta_5dPfqypXqwEDGwaxoWCzM',
  authDomain: 'clothing-shop-app.firebaseapp.com',
  projectId: 'clothing-shop-app',
  storageBucket: 'clothing-shop-app.appspot.com',
  messagingSenderId: '206879735951',
  appId: '1:206879735951:web:6b8078ed13ef1a6b7570fa',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
