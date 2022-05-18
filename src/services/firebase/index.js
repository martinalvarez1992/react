// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAWio1rM4ZI2usANaZK6cGXEx90QmYsPiI",
//   authDomain: "ecommerce-e3db1.firebaseapp.com",
//   projectId: "ecommerce-e3db1",
//   storageBucket: "ecommerce-e3db1.appspot.com",
//   messagingSenderId: "93631402743",
//   appId: "1:93631402743:web:06d08a89eb21f3cbebb9f2"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 