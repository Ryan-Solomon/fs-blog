import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB0Uw-orfieFM_gje7De5mapEcMEccUeAs',
  authDomain: 'fs-blog-cfe2c.firebaseapp.com',
  projectId: 'fs-blog-cfe2c',
  storageBucket: 'fs-blog-cfe2c.appspot.com',
  messagingSenderId: '236143735081',
  appId: '1:236143735081:web:32278c739be299814e0738',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
