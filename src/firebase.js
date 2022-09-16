import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNK6nCZ1YSdd4T9Ywqj8mrgKGeBulYMTk",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BACKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SEND_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID
};

const app = initializeApp(firebaseConfig);