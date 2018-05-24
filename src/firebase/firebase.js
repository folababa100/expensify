import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAzq5XtntewEOe_QI-QjU-n9ccl-whOM5E",
  authDomain: "expensify-3ef3d.firebaseapp.com",
  databaseURL: "https://expensify-3ef3d.firebaseio.com",
  projectId: "expensify-3ef3d",
  storageBucket: "expensify-3ef3d.appspot.com",
  messagingSenderId: "828963937220"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Adekunbi Adefolarin'
})