// Firebase App (the core Firebase SDK)
import * as firebase from 'firebase/app';

// Firebase Analytics
import 'firebase/analytics';

// Firebase Firestore Database
import 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyC2TnjNXAP4tAVJbEZkOKva2e1hu-LmGPM',
  authDomain: 'my-web-42c97.firebaseapp.com',
  databaseURL: 'https://my-web-42c97.firebaseio.com',
  projectId: 'my-web-42c97',
  storageBucket: 'my-web-42c97.appspot.com',
  messagingSenderId: '265159375634',
  appId: '1:265159375634:web:2fdc6911d59dc0ba1c91cb',
  measurementId: 'G-KYGV867SNY',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
