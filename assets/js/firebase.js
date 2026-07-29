// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyDJuYtGMSCNe4eSNo6T5MNNEJcdYW46X1s",

  authDomain: "shae-cleaners.firebaseapp.com",

  projectId: "shae-cleaners.firebaseapp.com",

  storageBucket: "shae-cleaners.firebasestorage.app",

  messagingSenderId: "886460432923",

  appId: "1:886460432923:web:700f4cfcf087f3be436ebe"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };