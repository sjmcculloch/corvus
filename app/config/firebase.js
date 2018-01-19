import * as firebase from 'firebase';

// should go in a secret file
const config = {
  apiKey: 'AIzaSyAOmSkb2JE8c66GNvEQO1m1vxSmjJsWLYQ',
  authDomain: 'corvus-c22a1.firebaseapp.com',
  databaseURL: 'https://corvus-c22a1.firebaseio.com',
  storageBucket: 'corvus-c22a1.appspot.com',
  messagingSenderId: '767697789668',
};
firebase.initializeApp(config);

export default firebase;
