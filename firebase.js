import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP__FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP__FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP__FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP__FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP__FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP__FIREBASE_APPID,
  // measurementId: "G-355CYVCLH0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
