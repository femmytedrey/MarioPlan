// src/config/fbConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAy2ojed3i7WlC12TuQRkYTpk6DJ9gAcfY",
  authDomain: "net-ninja-marioplan-334d4.firebaseapp.com",
  projectId: "net-ninja-marioplan-334d4",
  storageBucket: "net-ninja-marioplan-334d4.appspot.com",
  messagingSenderId: "854534744845",
  appId: "1:854534744845:web:0b666478ed7691cb9f1e44",
  measurementId: "G-KYDH0BK4W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
