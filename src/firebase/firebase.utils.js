import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5of4yIsA53jPPhmluiauwsiRZtsteBz8",
    authDomain: "crwn-db-76172.firebaseapp.com",
    projectId: "crwn-db-76172",
    storageBucket: "crwn-db-76172.appspot.com",
    messagingSenderId: "302143770911",
    appId: "1:302143770911:web:f36a8b9b71e2f83c98602a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;