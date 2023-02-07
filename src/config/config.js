//initialize the firebase app
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
require("dotenv").config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APY_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROYECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

//initialize 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//export 
module.exports = db;

