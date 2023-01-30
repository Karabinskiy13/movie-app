import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnUxHlQcNaPzEv7U-x-a7xBi-7B126WQo',
  authDomain: 'auth-example-21311.firebaseapp.com',
  projectId: 'auth-example-21311',
  storageBucket: 'auth-example-21311.appspot.com',
  messagingSenderId: '478291302439',
  appId: '1:478291302439:web:f727ce184b78f997c15602'
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
